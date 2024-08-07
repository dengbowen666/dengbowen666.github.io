      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[7,8,0,9,10,1,2,3,4,5,6]}},"star":{"/":{"path":"/star/","indexes":[7,8,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[7,8,9,0]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      