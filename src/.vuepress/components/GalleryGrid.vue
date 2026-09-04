<template>
  <div class="gallery-grid">
    <figure v-for="(item, i) in items" :key="i" class="gallery-item">
      <img
        :src="item.src"
        :alt="item.caption || ''"
        loading="lazy"
        :data-caption="item.caption || ''"
      />
      <figcaption v-if="item.caption">{{ item.caption }}</figcaption>
    </figure>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
});
</script>

<style scoped>
.gallery-grid {
  column-count: 3;
  column-gap: 1rem;
  margin: 1.5rem 0;
}
@media (max-width: 1024px) { .gallery-grid { column-count: 2; } }
@media (max-width: 640px)  { .gallery-grid { column-count: 1; } }

.gallery-item {
  break-inside: avoid;
  margin: 0 0 1rem;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: zoom-in;
}
.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.2);
}
.gallery-item img {
  width: 100%;
  display: block;
  transition: filter 0.3s ease;
}
.gallery-item:hover img { filter: brightness(1.05); }
.gallery-item figcaption {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 1.5rem 1rem 0.75rem;
  margin: 0;
  font-size: 0.95rem;
  color: #fff;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}
</style>
