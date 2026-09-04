<template>
  <div class="timeline-gallery">
    <div v-for="(item, i) in sorted" :key="i" class="tl-item" :class="i % 2 === 0 ? 'left' : 'right'">
      <div class="tl-card">
        <a v-if="item.link" :href="item.link" class="tl-cover">
          <img :src="item.cover" :alt="item.title" loading="lazy" />
        </a>
        <div class="tl-body">
          <span class="tl-date">{{ item.date }}</span>
          <a v-if="item.link" :href="item.link" class="tl-title">{{ item.title }}</a>
          <span v-else class="tl-title">{{ item.title }}</span>
          <p v-if="item.desc" class="tl-desc">{{ item.desc }}</p>
        </div>
      </div>
      <div class="tl-dot"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({ items: { type: Array, required: true } });
const sorted = computed(() => [...props.items].sort((a, b) => a.date < b.date ? 1 : -1));
</script>

<style scoped>
.timeline-gallery { position: relative; margin: 2.5rem 0; padding: 0.5rem 0; }

.timeline-gallery::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0; bottom: 0;
  width: 3px;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, transparent, var(--theme-color,#3eaf7c) 8%, var(--theme-color,#3eaf7c) 92%, transparent);
  border-radius: 3px;
}

.tl-item { position: relative; width: 50%; padding: 0 2.5rem 2.5rem 0; box-sizing: border-box; }
.tl-item.left  { left: 0; text-align: right; }
.tl-item.right { left: 50%; padding: 0 0 2.5rem 2.5rem; text-align: left; }

.tl-dot {
  position: absolute; top: 0.5rem;
  width: 16px; height: 16px; border-radius: 50%;
  background: var(--theme-color,#3eaf7c);
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px var(--theme-color,#3eaf7c);
  z-index: 2;
}
.tl-item.left  .tl-dot { right: -8px; }
.tl-item.right .tl-dot { left:  -8px; }

.tl-card {
  display: inline-flex;
  align-items: stretch;
  max-width: 100%;
  border-radius: 14px;
  overflow: hidden;
  background: var(--vp-c-bg,#fff);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  border: 1px solid var(--vp-c-border,#eee);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.tl-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 32px rgba(0,0,0,0.16);
}
.tl-cover { flex: 0 0 140px; overflow: hidden; }
.tl-cover img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform 0.4s ease;
}
.tl-card:hover .tl-cover img { transform: scale(1.05); }
.tl-body {
  padding: 1rem 1.25rem;
  display: flex; flex-direction: column; justify-content: center;
  min-width: 0;
}
.tl-date {
  font-size: 0.85rem; font-weight: 600;
  color: var(--theme-color,#3eaf7c);
  letter-spacing: 0.03em;
  margin-bottom: 0.25rem;
}
.tl-title {
  font-size: 1.25rem; font-weight: 700;
  color: var(--vp-c-text-1,#222);
  text-decoration: none;
  display: inline-block;
}
a.tl-title:hover { color: var(--theme-color,#3eaf7c); }
.tl-desc {
  margin: 0.35rem 0 0;
  font-size: 0.92rem;
  color: var(--vp-c-text-2,#666);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .timeline-gallery::before { left: 12px; }
  .tl-item, .tl-item.left, .tl-item.right {
    width: 100%; left: 0;
    padding: 0 0 2rem 2.5rem;
    text-align: left;
  }
  .tl-item.left .tl-dot, .tl-item.right .tl-dot { left: 4px; right: auto; }
  .tl-card { display: flex; flex-direction: column; width: 100%; }
  .tl-cover { flex: none; height: 140px; width: 100%; }
}
</style>
