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

<style lang="scss" scoped>
.vp-portfolio {
  position: relative;
  min-height: 420px;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &.bg {
    min-height: 520px;
  }
}

.vp-portfolio-mask {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.35;
  filter: blur(2px);
}

.vp-portfolio-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1100px;
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
}

/* 头像区 */
.vp-portfolio-avatar-wrap {
  position: relative;
  flex-shrink: 0;
}

.vp-portfolio-avatar-frame {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow:
    0 0 0 4px rgba(var(--theme-color), 0.25),
    0 12px 40px rgba(0, 0, 0, 0.25);
  background: rgba(var(--theme-color), 0.08);

  @media (max-width: 720px) {
    width: 160px;
    height: 160px;
  }
}

.vp-portfolio-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.vp-portfolio-avatar-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  font-weight: 700;
  color: rgba(var(--theme-color), 0.6);
}

/* 装饰光斑 */
.vp-portfolio-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.5;
  pointer-events: none;
  animation: float 6s ease-in-out infinite;
}

.vp-portfolio-glow-a {
  width: 80px;
  height: 80px;
  background: rgba(var(--theme-color), 0.3);
  top: -10px;
  right: -10px;
  animation-delay: 0s;
}

.vp-portfolio-glow-b {
  width: 60px;
  height: 60px;
  background: rgba(var(--theme-color), 0.2);
  bottom: -10px;
  left: -10px;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* 文本区 */
.vp-portfolio-info {
  flex: 1;
  min-width: 0;
}

.vp-portfolio-welcome {
  font-size: 1.05rem;
  margin: 0 0 0.25rem 0;
  color: rgba(var(--theme-text-color), 0.65);
  letter-spacing: 0.02em;
}

.vp-portfolio-name {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
  background: linear-gradient(
    135deg,
    rgb(var(--theme-color)) 0%,
    rgba(var(--theme-color), 0.7) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.vp-portfolio-title {
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  font-weight: 500;
  margin: 0 0 1.5rem 0;
  color: rgba(var(--theme-text-color), 0.75);
  min-height: 1.6em; /* 防止有/无打字机时跳动 */
  border-right: 2px solid rgb(var(--theme-color));
  padding-right: 0.5rem;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { border-color: transparent; }
}

/* 社交图标 */
.vp-portfolio-medias {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    justify-content: center;
  }
}

.vp-portfolio-media {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(var(--theme-color), 0.08);
  color: rgba(var(--theme-text-color), 0.7);
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(var(--theme-color), 0.18);
    color: rgb(var(--theme-color));
  }
}
</style>
