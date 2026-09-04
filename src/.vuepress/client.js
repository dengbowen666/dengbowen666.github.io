import { defineClientConfig } from "vuepress/client";
/*import { setupSnowFall } from "vuepress-theme-hope/presets/setupSnowFall.js";*/
//import "vuepress-theme-hope/presets/left-blog-info.scss"
//: 将博主信息移动至文章列表的左侧。

//为页面图标添加鼠标悬停的跳动效果。
import "vuepress-theme-hope/presets/bounce-icon.scss"

import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//import BlogHero from './components/BlogHero.vue'
import { defineAsyncComponent } from 'vue';

const HeroHitokoto = defineAsyncComponent(() => import('./components/HeroHitokoto.vue'));
const BlogBeautify = defineAsyncComponent(() => import('./components/BlogBeautify.vue'));

const TopNavBeautify = defineAsyncComponent(() => import('./components/TopNavBeautify.vue'));
const GalleryCarousel = defineAsyncComponent(() => import('./components/GalleryCarousel.vue'));
const GalleryGrid = defineAsyncComponent(() => import('./components/GalleryGrid.vue'));
const TimelineGallery = defineAsyncComponent(() => import('./components/TimelineGallery.vue'));
const ChinaMap = defineAsyncComponent(() => import('./components/ChinaMap.vue'));
export default defineClientConfig({
  layouts: {
    //BlogHero,
  },
  setup: () => {
    setupTransparentNavbar({ type: "homepage" });
    setupRunningTimeFooter(
      new Date("2024-08-07"),
      {
        
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
    setupSnowFall();

    // 关于我页面：雷姆看板娘（Live2D，OhMyLive2D + jsdelivr 雷姆模型）
    // 只在 /intro.html 路径加载；离开自动卸载
    const REM_MODEL_URL = "https://cdn.jsdelivr.net/npm/live2d-widget-model-rem@1.0.1/assets/rem.model.json";
    const OML2D_LIB_URL = "https://esm.sh/oh-my-live2d@0.19.3";

    const loadOml2d = () => new Promise((resolve, reject) => {
      if (window.__oml2dReady) return resolve();
      const s = document.createElement("script");
      s.type = "module";
      // 兼容命名/默认导出：try named import mount；fallback 拿 default.mount
      s.textContent =
        'import * as __oml2d from "' + OML2D_LIB_URL + '";' +
        "window.__oml2dMount = __oml2d.loadOml2d || __oml2d.mount || (__oml2d.default && (__oml2d.default.loadOml2d || __oml2d.default.mount));" +
        "window.__oml2dUnMount = __oml2d.unmount || (__oml2d.default && __oml2d.default.unmount);" +
        "window.__oml2dReady = true;" +
        'window.dispatchEvent(new Event("oml2d-ready"));';
      document.head.appendChild(s);
      window.addEventListener("oml2d-ready", resolve, { once: true });
      setTimeout(reject, 10000);
    });

    const mountRem = async () => {
      try {
        await loadOml2d();
        if (!window.__oml2dMount) return;
        // loadOml2d 返回 OML2D 实例（含 sleep/awaken/destroy 等方法）
        window.__oml2dInstance = window.__oml2dMount({
          dockedPosition: "right",
          mobileDisplay: true,
          models: [
            {
              path: REM_MODEL_URL,
              scale: 0.15,
              position: [-10, 35],
              stageStyle: { width: 280, height: 280 },
            },
          ],
          tips: {
            idleTips: {
              interval: 15000,
              message: [
                "你好，欢迎来到关于我~",
                "我是雷姆，今天也请多多关照~",
                "想知道主人的故事吗？",
                "点击我试试看~",
              ],
            },
          },
        });
        // mount 后清除隐藏样式（防止之前 unmount 加的 display:none 残留）
        document
          .querySelectorAll('[class*="oml2d" i], [id*="oml2d" i]')
          .forEach((el) => el.style.removeProperty("display"));
      } catch (e) {
        console.warn("[Live2D Rem] load failed:", e);
      }
    };

    const unmountRem = () => {
      // 优先调用实例方法（sleep 隐藏，比 destroy 更轻；下次回来直接 awaken）
      const inst = window.__oml2dInstance;
      if (inst) {
        try { inst.sleep && inst.sleep(); } catch (e) {}
      }
      // 兜底：直接给所有 oml2d 相关 DOM 加 display:none
      // oh-my-live2d 内部会重建 DOM，所以用 CSS 隐藏比 remove 更可靠
      document
        .querySelectorAll('[class*="oml2d" i], [id*="oml2d" i]')
        .forEach((el) => el.style.setProperty("display", "none", "important"));
    };

    const isRemPage = () => window.location.pathname === "/intro.html";
    const applyRem = () => { if (isRemPage()) mountRem(); else unmountRem(); };

    let remLastPath = window.location.pathname;
    setInterval(() => {
      const p = window.location.pathname;
      if (p !== remLastPath) {
        remLastPath = p;
        setTimeout(applyRem, 400);
      }
    }, 300);

    if (isRemPage()) setTimeout(mountRem, 600);

    // 主页 hero 文字打字机效果
    // theme-hope 把 frontmatter.heroText 渲染为某个元素（class 不固定），
    // 这里通过 textContent 精确匹配"千里之行，始于足下"找到目标元素，
    // 清空后逐字打出，并加一个闪烁光标。只在主页 "/" 路径下生效。
    const HERO_TEXT = "千里之行，始于足下";
    const TYPE_INTERVAL = 220; // 每字 ms
    const typewriterDone = { current: false };

    // 注入光标样式（只注入一次）
    if (!document.getElementById("vp-hero-typewriter-style")) {
      const style = document.createElement("style");
      style.id = "vp-hero-typewriter-style";
      style.textContent = `
        .vp-hero-typewriter::after {
          content: "|";
          margin-left: 4px;
          font-weight: 100;
          animation: vp-hero-blink 1s step-end infinite;
        }
        @keyframes vp-hero-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }

    const findHeroEl = () => {
      // 遍历所有元素，找直接 textNode 子节点且文本等于目标串的元素
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_ELEMENT,
      );
      let node;
      while ((node = walker.nextNode())) {
        const cs = node.childNodes;
        if (
          cs.length === 1 &&
          cs[0].nodeType === 3 &&
          node.textContent.trim() === HERO_TEXT
        ) {
          return node;
        }
      }
      return null;
    };

    const startTyping = (el) => {
      if (typewriterDone.current) return;
      typewriterDone.current = true;
      el.textContent = "";
      el.classList.add("vp-hero-typewriter");
      let i = 0;
      const timer = setInterval(() => {
        el.textContent = HERO_TEXT.slice(0, ++i);
        if (i >= HERO_TEXT.length) clearInterval(timer);
      }, TYPE_INTERVAL);
    };

    const tryStartTyping = () => {
      if (typewriterDone.current) return;
      const p = window.location.pathname;
      if (p !== "/" && p !== "/index.html") return;
      const el = findHeroEl();
      if (el) startTyping(el);
    };

    // MutationObserver：hero 文字元素是异步渲染的，监听 DOM 变化
    if (!window.__vpHeroTwObserver) {
      const obs = new MutationObserver(() => tryStartTyping());
      obs.observe(document.body, { childList: true, subtree: true });
      window.__vpHeroTwObserver = true;
    }

    // SPA 路由切换：离开主页再回来时允许重新打字
    let lastPath = window.location.pathname;
    setInterval(() => {
      const p = window.location.pathname;
      if (p !== lastPath) {
        lastPath = p;
        typewriterDone.current = false;
        setTimeout(tryStartTyping, 300);
      }
    }, 300);

    // 初始尝试
    tryStartTyping();

    // 修复 navbar 下拉父项点击文字无法跳转到总览页的问题
    // theme-hope 的 dropdown 父项是 <button.vp-dropdown-title>，
    // button 内部同时嵌着 <ul class="vp-dropdown">（下单项），原生 click 只 toggle open 不跳转。
    //
    // 强约束（非常重要！否则会污染下单项的原生跳转）：
    //  1) 点击目标若来自 <.vp-dropdown-item/*>（真实下单项 AutoLink 容器）→ return 不拦截
    //  2) 命中 button.vp-dropdown-title 后，仅当"按钮首行文字"在 PARENT_LINK_MAP 里才算父项
    //     （下单项的文字如"前端"不在 map 中 → return，交给原生 AutoLink）
    //  3) 点到 .arrow 图标 → 保留主题 toggle 动作
    // 父项文字 → 总览链接（与 navbar/en.ts 保持一致）
    const PARENT_LINK_MAP = {
      "记录": "/posts/",
      "展柜": "/gallery/",
      "收藏": "/favorite/",
      "关于我": "/intro.html",
      "博文": null, // 纯下拉容器，没有总览页，点击文字仅展开
    };
    if (typeof window !== "undefined") {
      document.addEventListener(
        "click",
        (e) => {
          const target = e.target;
          if (!(target instanceof Element)) return;

          // ① 下单项内部的点击 → 绝对不处理，交给主题的 AutoLink 原生跳转
          if (target.closest(
            ".vp-dropdown-item, .vp-dropdown-subitem, .vp-dropdown-subitems, ul.vp-dropdown, li.vp-dropdown-item"
          )) return;

          // ② 是否真正点到下拉父按钮？
          const btn = target.closest("button.vp-dropdown-title");
          if (!btn) return;

          // ③ 点到 arrow 图标 → 保留主题 toggle 展开动作
          if (target.closest(".arrow")) return;

          // ④ 只有"父项标题"存在于 map 中才执行跳转；不存在说明不是父项（误命中）
          const parentName = (btn.innerText || "").split(/\n/)[0].trim();
          if (!Object.prototype.hasOwnProperty.call(PARENT_LINK_MAP, parentName)) return;

          const href = PARENT_LINK_MAP[parentName];
          if (!href) return; // 随笔-博文这类纯下拉容器，null 值代表只展开，不跳转

          if (e.cancelable) e.stopPropagation();
          if (e.cancelable) e.preventDefault();
          window.location.href = href;
        },
        true // 捕获阶段，比冒泡阶段的 button.onClick 更早拿到事件
      );
    }
  },
  enhance({ app }) {
    // 注册element-plus
    app.use(ElementPlus)
    //app.component("BlogHero",BlogHero)
    // 展柜组件
    app.component("GalleryCarousel", GalleryCarousel)
    app.component("GalleryGrid", GalleryGrid)
    app.component("TimelineGallery", TimelineGallery)
    app.component("ChinaMap", ChinaMap)
  },
   rootComponents: [
    HeroHitokoto,
    BlogBeautify,
    TopNavBeautify
    // ...
  ],
});