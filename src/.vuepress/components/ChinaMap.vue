<template>
  <div class="china-map-wrap">
    <div ref="el" class="china-map"></div>
    <p v-if="error" class="map-hint">{{ error }}</p>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  cities: { type: Array, default: () => [] },
});

const el = ref(null);
const error = ref("");
let chart = null;
let onResize = null;

onMounted(async () => {
  try {
    const echarts = await import("echarts");
    const res = await fetch("https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json");
    if (!res.ok) throw new Error("地图数据加载失败");
    const geo = await res.json();
    echarts.registerMap("china", geo);

    chart = echarts.init(el.value);
    chart.setOption({
      tooltip: {
        trigger: "item",
        formatter: (p) =>
          props.cities.find((c) => c.name === p.name)
            ? `${p.name} · 已到达`
            : p.name,
      },
      geo: {
        map: "china",
        roam: true,
        scaleLimit: { min: 1, max: 6 },
        zoom: 1.2,
        itemStyle: { areaColor: "#eef2f7", borderColor: "#c7d0dc" },
        emphasis: { itemStyle: { areaColor: "#dfe6f0" }, label: { show: false } },
      },
      series: [
        {
          name: "已到达",
          type: "scatter",
          coordinateSystem: "geo",
          data: props.cities.map((c) => ({ name: c.name, value: c.value })),
          symbolSize: 14,
          itemStyle: {
            color: "#ff5c5c",
            shadowBlur: 10,
            shadowColor: "rgba(255,92,92,0.6)",
          },
          label: {
            show: true,
            position: "right",
            formatter: "{b}",
            color: "#333",
            fontSize: 12,
            fontWeight: "bold",
          },
          emphasis: { symbolSize: 20, label: { fontSize: 14 } },
        },
      ],
    });

    onResize = () => chart && chart.resize();
    window.addEventListener("resize", onResize);
  } catch (e) {
    error.value = "地图加载失败：" + (e?.message || e);
  }
});

onBeforeUnmount(() => {
  if (onResize) window.removeEventListener("resize", onResize);
  if (chart) chart.dispose();
});
</script>

<style scoped>
.china-map-wrap {
  margin: 2rem 0;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--vp-c-border,#eee);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  background: var(--vp-c-bg,#fff);
}
.china-map { width: 100%; height: 560px; }
.map-hint {
  padding: 1rem 1.5rem; margin: 0;
  color: #999; font-size: 0.9rem; text-align: center;
}
@media (max-width: 768px) { .china-map { height: 380px; } }
</style>
