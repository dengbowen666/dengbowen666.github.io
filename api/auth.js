// Decap CMS GitHub OAuth 代理（Vercel Serverless Function）
// 部署：vercel deploy --prod
// 环境变量：
//   GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, OAUTH_REDIRECT_URI
//
// Decap CMS OAuth 两步握手协议（关键！方向不能反）：
//   1. 弹窗 → CMS:  "authorizing:github"        （弹窗先发）
//   2. CMS  → 弹窗: "authorizing:github"        （CMS 回握）
//   3. 弹窗 → CMS:  "authorization:github:success:{JSON}"
//      必须用 CMS 传来的 e.origin 作为 targetOrigin，不能用 '*'

const { URL } = require("url");

const GITHUB_OAUTH = "https://github.com/login/oauth";

module.exports = async function handler(req, res) {
  const { method, query, headers } = req;
  const env = process.env;

  if (method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.status(204).end();
  }

  res.setHeader("Access-Control-Allow-Origin", "*");

  const redirectUri =
    env.OAUTH_REDIRECT_URI ||
    new URL("/callback", `https://${headers.host}`).toString();

  // 1) /api/auth?provider=github → 跳转到 GitHub 授权页
  if (query.provider === "github" || (req.url && req.url.endsWith("/api/auth"))) {
    res.setHeader("Content-Type", "application/json");
    const url = new URL(`${GITHUB_OAUTH}/authorize`);
    url.searchParams.set("client_id", env.GITHUB_CLIENT_ID || "");
    url.searchParams.set("redirect_uri", redirectUri);
    url.searchParams.set("scope", "repo");
    url.searchParams.set("state", "decap");
    return res.redirect(302, url.toString());
  }

  // 2) /callback?code=...&state=decap → 用 code 换 access_token
  if (query.code && query.state === "decap") {
    let token = null;
    let error = null;

    try {
      const resp = await fetch(`${GITHUB_OAUTH}/access_token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code: query.code,
          redirect_uri: redirectUri,
        }),
      });
      const data = await resp.json();
      token = data.access_token || null;
      if (!token) error = JSON.stringify(data);
    } catch (e) {
      error = String(e);
    }

    const isSuccess = !error && token;
    const payload = isSuccess
      ? JSON.stringify({ token: token, provider: "github" })
      : JSON.stringify({ error: error || "GitHub 未返回 access_token" });
    const successMsg = `authorization:github:success:${payload}`;
    const errorMsg = `authorization:github:error:${payload}`;
    const resultMsg = isSuccess ? successMsg : errorMsg;

    // Decap CMS 两步握手协议：
    //   弹窗先发 "authorizing:github" → CMS 回握 → 弹窗用 CMS 传来的 origin 发结果
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.end(`<!doctype html>
<html>
<head><meta charset="utf-8"><title>Decap CMS 登录</title></head>
<body>
<script>
(function() {
  var resultMsg = ${JSON.stringify(resultMsg)};

  function sendToParent(origin) {
    if (window.opener) {
      window.opener.postMessage(resultMsg, origin || '*');
    }
  }

  // 核心：监听 CMS 的回握，收到后用 CMS 传来的 origin 发送结果
  function onMessage(e) {
    if (e.data === 'authorizing:github') {
      sendToParent(e.origin);
      window.removeEventListener('message', onMessage, false);
      // 稍等再关闭，确保 CMS 收到
      setTimeout(function() { try { window.close(); } catch(_) {} }, 500);
    }
  }
  window.addEventListener('message', onMessage, false);

  // 弹窗先发 "authorizing:github" 发起握手
  if (window.opener) {
    window.opener.postMessage('authorizing:github', '*');
  }
})();
</script>
</body>
</html>`);
  }

  // 3) 未匹配任何路由
  res.setHeader("Content-Type", "application/json");
  return res.status(404).json({ error: "Not Found", hint: "Use /api/auth?provider=github" });
};
