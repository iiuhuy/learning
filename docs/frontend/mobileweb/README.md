# Mobile Web

移动端

- viewport
- CSS pixel
- touch 事件
- iOS/Android 浏览器的差异与兼容
- 移动端的性能优化
- 300ms delay...

and Hybrid 是什么？

- Cordova/Phonegap
- iOS/Android 通信的机制
- URI Scheme 或者 JS Bridge

## H5 游戏？

常用库开发

- Easel.JS 可以处理画布
- Tween.JS 创建动画补间
- Sound.JS 实时处理音频
- Preload.JS 协调资源加载
- Three.JS 操作 3D 场景

页游？

- Create.JS
- Cocos2d
- Egret(白鹭游戏引擎)


### 1.移动端的优化方式？

### 2.移动端适配

> 最近看了很多移动适配的文章，还没消化，先积累着。搞懂移动端适配问题，先明白像素和视口。

设备的像素？

设备像素 (device pixel, dp): 又称为物理像素。单位 pt。pt 在 css 单位中属于真正的绝对单位，1pt = 1/72 (inch), inch 及英寸，而 1 英寸等于 2.54 厘米。所以设备像素的特点就是大小固定，不可变。比如 iPhone 5 的分辨率为 640 x 1136px.

CSS 像素?

在 CSS、JS 中使用的一个抽象的概念，单位是 px。

> CSS 像素也可以称为设备独立像素 (device-independent pixels)，简称为 dips，单位是 dp。

[DPI 计算/PPI 计算参考网站](https://www.sven.de/dpi/)

#### 响应式参考

```css
/* 常用于图片流 */
@media all and (max-width: 1690px) {
  ...;
}
@media all and (max-width: 1280px) {
  ...;
}
@media all and (max-width: 980px) {
  ...;
}
@media all and (max-width: 736px) {
  ...;
}
@media all and (max-width: 480px) {
  ...;
}

/* 常用于稍微复杂的基本响应 */
@media all and (min-width: 1200px) {
  ...;
}
@media all and (min-width: 960px) and (max-width: 1199px) {
  ...;
}
@media all and (min-width: 768px) and (max-width: 959px) {
  ...;
}
@media all and (min-width: 480px) and (max-width: 767px) {
  ...;
}
@media all and (max-width: 599px) {
  ...;
}
@media all and (max-width: 479px) {
  ...;
}

/* 基于Bootstrap 3.x 全球主流框架 */
@media all and (max-width: 991px) {
  ...;
}
@media all and (max-width: 768px) {
  ...;
}
@media all and (max-width: 480px) {
  ...;
}

/* 基于Bootstrap 4.x 全球主流框架 */
@media all and (max-width: 1199px) {
  ...;
}
@media all and (max-width: 991px) {
  ...;
}
@media all and (max-width: 768px) {
  ...;
}
@media all and (max-width: 575px) {
  ...;
}

/* 基于 Material Design Lite (MDL) 材料设计框架 */
@media all and (max-width: 1024px) {
  ...;
}
@media all and (max-width: 839px) {
  ...;
}
@media all and (max-width: 480px) {
  ...;
}

/* 常用于Retina屏幕图片适配(@2x) */
@media (-webkit-min-device-pixel-ratio: 1.5),
  (min--moz-device-pixel-ratio: 1.5),
  (-o-min-device-pixel-ratio: 3/2),
  (min-resolution: 1.5dppx) {
  ...;
}
```

Retina 常见问题

搭配基本的响应式断点，配合 http://imulus.github.io/retinajs/ 来控制 Retina 图片的显示效果。

参考 Medium 英文博文：https://medium.com/@uiuxlab/the-most-used-responsive-breakpoints-in-2017-of-mine-9588e9bd3a8a

#### 2.1.rem 移动端适配原理(rem 单位换算)？

### 3.webp 图片的浏览器兼容检测？
