// Decap CMS GitHub OAuth 代理（Vercel Serverless Function）
// 部署：vercel deploy --prod
// 环境变量：
//   GITHUB_CLIENT_ID       - GitHub OAuth App Client ID
//   GITHUB_CLIENT_SECRET  - GitHub OAuth App Client Secret
//   OAUTH_REDIRECT_URI     - 回调 URL（如 https://decap-oauth-dengbowen.vercel.app/callback）

import { URL } from "url";

const GITHUB_OAUTH = "https://github.com/login/oauth";
const GITHUB_API = "https://api.github.com";

export default async function handler(req, res) {
  const { method, query, headers, body } = req;
  const env = process.env;

  // 预检 / 健康检查
  if (method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.status(204).end();
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  // 1) /api/auth → OAuth 跳转
  if (query.provider === "github" || req.url?.endsWith("/api/auth")) {
    const redirect_uri =
      env.OAUTH_REDIRECT_URI ||
      new URL("/callback", `https://${headers.host}`).toString();
    const url = new URL(`${GITHUB_OAUTH}/authorize`);
    url.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
    url.searchParams.set("redirect_uri", redirect_uri);
    url.searchParams.set("scope", "repo");
    url.searchParams.set("state", "decap");
    return res.redirect(302, url.toString());
  }

  // 2) /callback → 用 code 换 access_token
  if (query.code && query.state === "decap") {
    const redirect_uri =
      env.OAUTH_REDIRECT_URI ||
      new URL("/callback", `https://${headers.host}`).toString();
    const resp = await fetch(`${GITHUB_OAUTH}/access_token`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code: query.code,
        redirect_uri,
      }),
    });
    const token = await resp.json();
    return res.end(`
<!doctype html><html><body><script>
  const token = ${JSON.stringify(token)};
  if (window.opener) {
    window.opener.postMessage({ token: token.access_token, provider: 'github' }, '*');
    window.close();
  } else {
    document.body.innerHTML = '登录成功，请返回上一页';
  }
</script></body></html>`);
  }

  // 3) 没有匹配到任何路由
  return res.status(404).json({ error: "Not Found", hint: "Use /api/auth?provider=github" });
}
