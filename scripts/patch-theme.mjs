// 自动覆盖 theme-hope 的 PortfolioHome / PortfolioHero 组件
// 让它们 import 我们自定义的版本，而不是 theme 原版
// npm install 后自动运行（postinstall）
import { writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const patches = [
  {
    target: "node_modules/vuepress-theme-hope/dist/client/components/home/PortfolioHome.js",
    source: "src/.vuepress/components/PortfolioHome.vue",
  },
  {
    target: "node_modules/vuepress-theme-hope/dist/client/components/home/PortfolioHero.js",
    source: "src/.vuepress/components/PortfolioHero.vue",
  },
];

for (const p of patches) {
  const targetPath = resolve(root, p.target);
  const sourceAbs = resolve(root, p.source).replace(/\\/g, "/");
  const importLine = `import MyOverride from "${sourceAbs}";\nexport default MyOverride;\n`;

  if (!existsSync(targetPath)) {
    console.warn(`[patch-theme] target not found: ${p.target}, skipping`);
    continue;
  }

  const current = (await import("node:fs")).readFileSync(targetPath, "utf-8");
  // 如果已经是 patch 过的版本就跳过（避免每次 install 重复写）
  if (current.includes("MyOverride from")) {
    console.log(`[patch-theme] ${p.target} already patched ✓`);
    continue;
  }

  writeFileSync(targetPath, importLine);
  console.log(`[patch-theme] patched ${p.target} → ${p.source}`);
}
