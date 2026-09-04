---
cover: https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cosplay%20silver%20haired%20fantasy%20mage%20portrait%20dramatic%20studio%20lighting%20detailed%20costume&image_size=landscape_4_3
icon: mask
title: Cosplay 图集
article: false
---

## 角色图集

点击角色卡片进入光影幻灯片。

<div class="cosplay-list">

<VPCard
  image="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cosplay%20silver%20haired%20fantasy%20mage%20portrait%20dramatic%20studio%20lighting%20detailed%20costume&image_size=portrait_4_3"
  title="银发法师"
  desc="施法者的权杖与星辉"
  link="/gallery/cosplay/silver-mage.html"
/>

<VPCard
  image="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cyberpunk%20girl%20cosplay%20neon%20city%20background%20leather%20jacket%20pink%20hair%20cinematic%20portrait&image_size=portrait_4_3"
  title="机械朋克少女"
  desc="霓虹雨夜的未来行者"
  link="/gallery/cosplay/cyber-girl.html"
/>

</div>

<style>
.cosplay-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}
@media (max-width: 1024px) {
  .cosplay-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .cosplay-list {
    grid-template-columns: 1fr;
  }
}
</style>
