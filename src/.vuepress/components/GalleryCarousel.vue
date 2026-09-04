<template>
  <div class="gallery-carousel">
    <el-carousel
      :interval="interval"
      :height="height"
      :autoplay="autoplay"
      indicator-position="outside"
      arrow="always"
      pause-on-hover
    >
      <el-carousel-item v-for="(slide, i) in slides" :key="i">
        <div class="slide">
          <img :src="slide.src" :alt="slide.caption || ''" loading="lazy" />
          <div v-if="slide.caption || slide.desc" class="caption">
            <h3 v-if="slide.caption">{{ slide.caption }}</h3>
            <p v-if="slide.desc">{{ slide.desc }}</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  slides: { type: Array, required: true },
  interval: { type: Number, default: 4500 },
  autoplay: { type: Boolean, default: true },
});

const height = computed(() =>
  typeof window !== "undefined" && window.innerWidth < 768 ? "50vh" : "72vh"
);
</script>

<style scoped>
.gallery-carousel {
  margin: 1.5rem 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
}
.slide {
  position: relative;
  width: 100%;
  height: 100%;
  background: #111;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem 2.5rem 1.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.75), transparent);
  color: #fff;
  pointer-events: none;
}
.caption h3 {
  margin: 0 0 0.25rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}
.caption p {
  margin: 0;
  font-size: 1rem;
  opacity: 0.9;
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
}
:deep(.el-carousel__indicators--outside) { margin-top: 0.75rem; }
:deep(.el-carousel__button) { background: #909399; }
:deep(.el-carousel__arrow) {
  background: rgba(0,0,0,0.35);
  backdrop-filter: blur(4px);
}
:deep(.el-carousel__arrow:hover) { background: rgba(0,0,0,0.55); }
</style>
