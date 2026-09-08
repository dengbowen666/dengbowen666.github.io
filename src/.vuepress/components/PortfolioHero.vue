<template>
  <section id="portfolio" class="vp-portfolio">
    <!-- 背景遮罩（用 bgImage frontmatter 控制） -->
    <div v-if="bg.image" class="vp-portfolio-mask" :style="{ background: `url(${bg.image}) center/cover no-repeat` }"></div>

    <div class="vp-portfolio-inner">
      <!-- 左：头像 + 装饰 -->
      <div class="vp-portfolio-avatar-wrap">
        <div class="vp-portfolio-avatar-frame">
          <img v-if="avatar.avatar" :src="avatar.avatar" :alt="avatar.alt || avatar.name" class="vp-portfolio-avatar" />
          <div v-else class="vp-portfolio-avatar-placeholder">
            {{ (avatar.name || '?').charAt(0).toUpperCase() }}
          </div>
        </div>
        <!-- 装饰光斑 -->
        <div class="vp-portfolio-glow vp-portfolio-glow-a"></div>
        <div class="vp-portfolio-glow vp-portfolio-glow-b"></div>
      </div>

      <!-- 右：文本信息 -->
      <div class="vp-portfolio-info">
        <p class="vp-portfolio-welcome">{{ info.welcome }}</p>
        <h1 class="vp-portfolio-name">{{ info.name }}</h1>
        <!-- 打字机标题（有 titles 才显示） -->
        <h2 v-if="hasTitles" class="vp-portfolio-title">{{ typedTitle }}</h2>

        <!-- 社交图标 -->
        <div class="vp-portfolio-medias" v-if="info.medias && info.medias.length">
          <a
            v-for="m in info.medias"
            :key="m.name"
            class="vp-portfolio-media"
            :href="m.url"
            target="_blank"
            rel="noopener noreferrer"
            :title="m.name"
          >
            <VPIcon :icon="m.icon" sizing="both" />
          </a>
        </div>
        <!-- 兜底：无 medias 且有 SocialMedias 全局组件 -->
        <SocialMedias v-else-if="hasGlobalSocialMedias" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch } from "vue";
import { useFrontmatter, withBase } from "vuepress/client";
import { useAuthorInfo } from "@theme-hope/composables/useAuthorInfo";

const authorInfo = useAuthorInfo();
const frontmatter = useFrontmatter();

// 头像
const avatar = computed(() => {
  const { name, avatar, avatarDark, avatarAlt, avatarStyle } = frontmatter.value;
  return {
    name: name ?? authorInfo.value.name,
    avatar: avatar ? withBase(avatar) : null,
    avatarDark: avatarDark ? withBase(avatarDark) : null,
    alt: avatarAlt || name || "",
    style: avatarStyle ?? null,
  };
});

// 背景
const bg = computed(() => {
  const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;
  return {
    image: typeof bgImage === "string" ? withBase(bgImage) : null,
    imageDark: typeof bgImageDark === "string" ? withBase(bgImageDark) : null,
    style: bgImageStyle ?? null,
  };
});

// 文本信息
const info = computed(() => {
  const { welcome, name, medias } = frontmatter.value;
  const titles = frontmatter.value.titles;
  return {
    name: name ?? authorInfo.value.name,
    welcome: welcome ?? "👋 Hi There, I'm",
    titles: Array.isArray(titles) && titles.length ? titles : [],
    medias: Array.isArray(medias) && medias.length ? medias : null,
  };
});

const hasTitles = computed(() => info.value.titles.length > 0);

// 打字机
const currentIndex = ref(0);
const typedTitle = ref("");
let typingTimer = null;
let rotateTimer = null;

const startTyping = () => {
  if (!hasTitles.value) return;
  typedTitle.value = "";
  const current = info.value.titles[currentIndex.value] || "";
  let charIdx = 0;

  const typeChar = () => {
    if (charIdx <= current.length) {
      typedTitle.value = current.slice(0, charIdx);
      charIdx++;
      typingTimer = setTimeout(typeChar, 130);
    } else {
      // 打完停 1.5s 切到下一条
      rotateTimer = setTimeout(() => {
        currentIndex.value =
          currentIndex.value >= info.value.titles.length - 1
            ? 0
            : currentIndex.value + 1;
      }, 1500);
    }
  };
  typeChar();
};

const stopTyping = () => {
  if (typingTimer) clearTimeout(typingTimer);
  if (rotateTimer) clearTimeout(rotateTimer);
};

watch(
  () => info.value.titles,
  () => {
    stopTyping();
    startTyping();
  },
  { immediate: true },
);

onMounted(() => startTyping());
onBeforeUnmount(() => stopTyping());

// 兜底：是否有全局 SocialMedias 组件
const hasGlobalSocialMedias = computed(() => {
  // 简单检测：window.VPComponents 里是否注册了 SocialMedias
  return typeof window !== "undefined" && !!window.VPComponents?.["SocialMedias"];
});
</script>

<style lang="scss">
/* 样式已抽到 styles/portfolio-override.scss，从 client.js 导入 */
/* 这里留空避免重复 */
</style>
