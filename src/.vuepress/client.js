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
    // theme-hope 预设函数通常已内部做 SSR 保护
    setupTransparentNavbar({ type: "homepage" });
    setupRunningTimeFooter(
      new Date("2024-08-07"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
    setupSnowFall();

    // 以下全部为浏览器端代码，必须在 CSR 环境下执行
    if (typeof window === "undefined") return;

    // ===== 关于我页面：雷姆看板娘（Live2D，OhMyLive2D + jsdelivr 雷姆模型）=====
    // 只在 /intro.html 路径加载；离开自动卸载
    const REM_MODEL_URL = "https://cdn.jsdelivr.net/npm/live2d-widget-model-rem@1.0.1/assets/rem.model.json";
    const OML2D_LIB_URL = "https://esm.sh/oh-my-live2d@0.19.3";

    const loadOml2d = () => new Promise((resolve, reject) => {
      if (window.__oml2dReady) return resolve();
      const s = document.createElement("script");
      s.type = "module";
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
        document
          .querySelectorAll('[class*="oml2d" i], [id*="oml2d" i]')
          .forEach((el) => el.style.removeProperty("display"));
      } catch (e) {
        console.warn("[Live2D Rem] load failed:", e);
      }
    };

    const unmountRem = () => {
      const inst = window.__oml2dInstance;
      if (inst) {
        try { inst.sleep && inst.sleep(); } catch (e) {}
      }
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

    // ===== 主页 hero 文字打字机效果 =====
    const HERO_TEXT = "千里之行，始于足下";
    const TYPE_INTERVAL = 220;
    const typewriterDone = { current: false };

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

    if (!window.__vpHeroTwObserver) {
      const obs = new MutationObserver(() => tryStartTyping());
      obs.observe(document.body, { childList: true, subtree: true });
      window.__vpHeroTwObserver = true;
    }

    let lastPath = window.location.pathname;
    setInterval(() => {
      const p = window.location.pathname;
      if (p !== lastPath) {
        lastPath = p;
        typewriterDone.current = false;
        setTimeout(tryStartTyping, 300);
      }
    }, 300);

    tryStartTyping();

    // ===== 修复 navbar 下拉父项点击文字无法跳转到总览页 =====
    const PARENT_LINK_MAP = {
      "记录": "/posts/",
      "展柜": "/gallery/",
      "收藏": "/favorite/",
      "关于我": "/intro.html",
      "博文": null,
    };
    document.addEventListener(
      "click",
      (e) => {
        const target = e.target;
        if (!(target instanceof Element)) return;
        if (target.closest(
          ".vp-dropdown-item, .vp-dropdown-subitem, .vp-dropdown-subitems, ul.vp-dropdown, li.vp-dropdown-item"
        )) return;
        const btn = target.closest("button.vp-dropdown-title");
        if (!btn) return;
        if (target.closest(".arrow")) return;
        const parentName = (btn.innerText || "").split(/\n/)[0].trim();
        if (!Object.prototype.hasOwnProperty.call(PARENT_LINK_MAP, parentName)) return;
        const href = PARENT_LINK_MAP[parentName];
        if (!href) return;
        if (e.cancelable) e.stopPropagation();
        if (e.cancelable) e.preventDefault();
        window.location.href = href;
      },
      true
    );
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