# Performance

前端性能认知。在提升 PC/H5/Native 等多个端上对性能的认知。

参考：

- [Web 性能权威指南](https://book.douban.com/subject/25856314/)
- [高性能网站建设指南](https://book.douban.com/subject/3132277/)
- My-Blog-[前端性能优化话题](https://alvinmi.github.io/2018/10/23/%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html)
- [performance-column](https://github.com/barretlee/performance-column/)，写的挺好的，可以加入小密圈。

## 基础？

### 1.为什么减少 HTTP 请求能够优化性能？

HTTP 请求建立和释放需要时间，浏览器对同一个域名的并发数量有限制。

不同的网络环境、HTTP 协议版本和浏览会有不同的优化策略。

解决方案：

- 1.[CSS Sprites 技术](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/CSS_Image_Sprites)
- 2.[内联图片 & base64]()
  - [CSS 中内联 SVG 图片有比 Base64 更好的形式](https://www.zhangxinxu.com/wordpress/2018/08/css-svg-background-image-base64-encode/)
  - [小 tip: base64: URL 背景图片与 Web 页面性能优化](https://www.zhangxinxu.com/wordpress/2012/04/base64-url-image-%E5%9B%BE%E7%89%87-%E9%A1%B5%E9%9D%A2%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/)
  - [前端开发中，使用 base64 图片的弊端是什么？](https://www.zhihu.com/question/31155574)
- 3.合并脚本和样式表。脚本和样式压缩，避免了额外的网络请求。(参考 VueCLI 里面的 [public 文件](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#public-%E6%96%87%E4%BB%B6%E5%A4%B9))

参考：

- [合并 HTTP 请求是否真的有意义？](https://www.zhihu.com/question/34401250)

## 网络相关

- 性能优化之 DNS Prefetch
- 性能优化之 Preload
- 性能优化之 PreRender

## 渲染时机相关

- 性能优化之懒加载
- 性能优化之懒执行
- 性能优化之渐进式渲染

## 细节知识点

- 性能优化之数据缓存
- 性能优化之内敛 CSS
- 性能优化之 webp
- 性能优化之 CDN 图片动态处理

## 比较难研究的课题

- 性能优化之帧率
- 性能优化之多线程
- 性能优化之首屏白屏优化

## 比较系统的文章

- 移动端开发，你需要掌握这些内容
- 性能优化的几个误区
- 为团队打造一个性能优化闭环
- 如何排查网页的性能问题

## 后续研究方向

- 无线戏能优化之 xxx
- Native 性能优化之 xxx
