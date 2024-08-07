export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"Guide":{"path":"/category/guide/","indexes":[0,1,2,3,4,5,6]},"Vegetable":{"path":"/category/vegetable/","indexes":[7,8]},"Fruit":{"path":"/category/fruit/","indexes":[9]},"Strawberry":{"path":"/category/strawberry/","indexes":[9]}}}},"tag":{"/":{"path":"/tag/","map":{"disable":{"path":"/tag/disable/","indexes":[1]},"encryption":{"path":"/tag/encryption/","indexes":[2]},"Layout":{"path":"/tag/layout/","indexes":[3]},"Markdown":{"path":"/tag/markdown/","indexes":[4]},"Page config":{"path":"/tag/page-config/","indexes":[0]},"Guide":{"path":"/tag/guide/","indexes":[0]},"red":{"path":"/tag/red/","indexes":[7,8,9]},"round":{"path":"/tag/round/","indexes":[7,8]},"small":{"path":"/tag/small/","indexes":[9]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

