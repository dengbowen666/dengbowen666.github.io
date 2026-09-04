---
cover: https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20water%20town%20stone%20arch%20bridge%20misty%20morning%20rain%20cinematic%20travel%20photo&image_size=landscape_4_3
icon: route
title: 旅游记录
article: false
---

## 旅程时间轴

走过的城市，沿时间线排开。点击卡片进入该城图集。

<TimelineGallery :items='[
  {"date":"2026-08","title":"大理","desc":"苍洱之间的风与光","cover":"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Erhai%20lake%20sunrise%20boat%20reflection%20Cangshan%20mountain%20Dali%20Yunnan%20travel%20photography&image_size=landscape_4_3","link":"/gallery/travel/dali.html"},
  {"date":"2026-05","title":"重庆","desc":"山城夜色与江雾霓虹","cover":"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hongyadong%20night%20cityscape%20lit%20buildings%20river%20Chongqing%20China%20travel%20photography&image_size=landscape_4_3","link":"/gallery/travel/chongqing.html"},
  {"date":"2026-03","title":"京都","desc":"古都光影（国际旅程）","cover":"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fushimi%20Inari%20thousand%20red%20torii%20gates%20path%20Kyoto%20Japan%20travel%20photography&image_size=landscape_4_3","link":"/gallery/travel/kyoto.html"}
]' />

## 已走过的城市

中国地图上标亮的为已到访城市（可滚轮缩放、拖动查看）。

<ChinaMap :cities='[
  {"name":"重庆","value":[106.55,29.56]},
  {"name":"大理","value":[100.23,25.69]}
]' />

> 国际旅程（如京都）不在中国地图范围内，仅展示于上方时间轴。
