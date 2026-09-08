<template>
  <main id="main-content" class="vp-page vp-portfolio-home" aria-labelledby="main-title">
    <!-- 英雄区 -->
    <MyPortfolioHero />

    <!-- Markdown 正文 -->
    <div v-if="content !== 'none'" class="vp-portfolio-content-wrap">
      <DropTransition appear :delay="0.24">
        <MarkdownContent class="vp-portfolio-content">
          <slot />
        </MarkdownContent>
      </DropTransition>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useFrontmatter } from "vuepress/client";
import MarkdownContent from "@theme-hope/components/base/MarkdownContent";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import MyPortfolioHero from "./PortfolioHero.vue";

const frontmatter = useFrontmatter();
const content = computed(() => frontmatter.value.content ?? "portfolio");
</script>

<style lang="scss">
/* 不用 scoped，让样式能注入全局覆盖 theme-hope 的 portfolio 样式 */
.vp-portfolio-content-wrap {
  max-width: 780px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem;
}
</style>
