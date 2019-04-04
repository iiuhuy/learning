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

### 2.H5 页面如何实现多终端的适配？

#### 2.1.vw 实现

移动端布局，需要应对两个最为重要的问题：

- 1.各终端下的适配问题；
- 2.Retina 屏的细节处理。直接使用原生 CSS 来搞？

使用 vw 实现移动端适配！`vm` 是基于 Viewport 视窗的长度单位，这里的视窗(Viewport),即浏览器可视化的区域。大小为 `window.innerWidth/window.innerHeight`。

> 因为 Viewport 涉及到的知识点很多，要介绍清楚这方面的知识，都需要几篇文章来进行阐述。@PPK 大神有[两篇文章](https://www.quirksmode.org/mobile/viewports2.html)详细介绍了这方面的知识。中文可以移步[这里](https://www.w3cplus.com/css/viewports.html)进行阅读。

在 [CSS Values and Units Module Level 3](https://www.w3.org/TR/css3-values/) 中和 Viewport 相关的单位有四个，分别为 vw、vh、vmin 和 vmax:

- 1.vw: 是 `Viewport's width` 的简写，`1vw = window.innerWidth` 的 1%；
- 2.vh: 是 `Viewport's height` 的简写， `1vh = window.innerHeight` 的 1%；
- 3.vmin: vmin 的值是当前 vw 和 vh 中较小的值；
- 4.vmax: vmax 的值是当前 vw 和 vh 中较大的值。

> vmin 和 vmax 是根据 Viewport 中长度偏大的那个维度值计算出来的，如果 window.innerHeight > window.innerWidth 则 vmin 取百分之一的 window.innerWidth，vmax 取百分之一的 window.innerHeight 计算。

750px 的设计稿，如果不计算的话，可以使用 PostCSS 插件 [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport), 可以在代码中直接写 px, 编译之后会自动转换成 vw。

如果是 1125px, 可以修改 viewportWidth 的值，插件可以看 [官方使用文档](https://github.com/evrone/postcss-px-to-viewport)

什么地方可以使用 `vw` 来适配我们的页面？

- 1.容器适配
- 2.文本的适配
- 3.大于 1px 的边框、圆角、阴影
- 4.内距和外距

降级处理，如果有的机型不支持 `vw` 方案， 如果业务需要，应该如何处理？ 有两种方式可以进行降级处理：

- 1.[CSS Houdini](https://github.com/w3c/css-houdini-drafts/wiki)： 通过 CSS Houdini 针对 `vw` 做处理，调用 [CSS Typed OM Level](https://www.w3.org/TR/css-typed-om-1) 提供的 [CSSUnitValue API](https://www.w3.org/TR/css-typed-om-1/#numericvalue-serialization)
- 2.CSS Polyfill: 通过写相应 Polyfill 做相应的处理，目前针对 `vw` 单位的 Polyfill 主要有: [vminpoly](https://github.com/saabi/vminpoly)、[Viewport Units Buggyfill](https://github.com/rodneyrehm/viewport-units-buggyfill)、[vunits.js](https://gist.github.com/LeaVerou/1347501) 和 [Modernizr](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)。大漠老师推荐 Viewport Units Buggyfill。

**Viewport 不足之处**

比如当容器使用 vw 单位，margin 采用 px 单位时，很容易造成整体宽度超过 100vw，从而影响布局效果。对于类似这样的现象，我们可以采用相关的技术进行规避。比如将 margin 换成 padding，并且配合 box-sizing。

这不是最佳方案，随着将来浏览器或者应用自身的 Webview 对 calc() 函数的支持之后，碰到 vw 和 px 混合使用的时候，可以结合 calc() 函数一起使用，这样就可以完美的解决。

可以使用下面工具 [CSS3-test](https://css3test.com/), 或者直接扫二维码。

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190403202814.png"/>

vw 方案和 Flexbox 方案区别？

Flexible 的设计原理来源于 Viewport 单位的思路。通过 JS 来判断，动态修改 meta 的值。而 vw 是浏览器客户端原生支持的特性，不需要依赖 JS 来做任何的判断和计算。这是两者最大的差异。

Flexble 已完成历史使命，拥抱新变化。

技术方案这东西，没有绝对的。

参考：

- [使用 Flexible 实现手淘 H5 页面的终端适配 @大漠老师](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)
- [amfe/lib-flexble](https://github.com/amfe/lib-flexible)
- [再谈 Retina 下 1px 的解决方案](https://www.w3cplus.com/css/fix-1px-for-retina.html)
- [终端设备的参数](https://material.io/tools/devices/)
- [苹果手机分辨率指南](https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions)。

实践一下： [如何在 Vue 项目中使用 vw 实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)

安装 [VueCLI](https://cli.vuejs.org/)，使用 yarn。

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

如果安装后出现

```bash
$ vue --version
zsh: command not found: vue
```

如要添加环境到 `.zshrc`：

```bash
$ yarn global bin
/home/alvinmi/.yarn/bin
$ echo 'export PATH="/home/alvinmi/.yarn/bin:$PATH"' >> ~/.zshrc
$ source ~/.zshrc
$ vue --version
3.5.5
```

新建一个项目:

```bash
$ vue init webpack vw-layout
  Command vue init requires a global addon to be installed.
  Please run yarn global add @vue/cli-init and try again.
$ yarn global add @vue/cli-init
$ vue init webpack vw-layout
# 选择相应的配置就行
$ cd vw-layout
$ npm run dev
```

通过 http://localhost:8082 ，就能访问项目的初始化项目。

通过 `Vue-CLI` 构建的项目，在项目的根目录下有一个 `.postcssrc.js` 的配置文件，默认就有。

```js
// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {}
  }
};
```

- [postcss-import](https://github.com/postcss/postcss-import), 主要功能是解决 `@import` 引入路径问题。使用这个插件很容易使用本地文件、`node_modules` 或者 `web_modules` 文件，配置 `postcss-url` 引入文件变得更轻松。
- [postcss-url](https://github.com/postcss/postcss-url), 主要用来处理文件，如图片文件、字体文件等引用路径的处理，vue 中 `vue-loader` 已具有类似的功能，只需要配置中将 `vue-loader` 配置进去。
- [autoprefixer](https://github.com/postcss/autoprefixer), 用来自动处理浏览器前缀的一个插件。

上面三个是 `Vue CLI` 默认就配置了的 PostCSS 插件，完成 `vw` 的布局兼容方案，还需要配置下面的几个 PostCSS 插件：

- [postcss-aspect-ratio-mini](https://github.com/yisibl/postcss-aspect-ratio-mini)
- [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)
- [postcss-write-svg](https://github.com/jonathantneal/postcss-write-svg)
- [postcss-cssnext](https://github.com/MoOx/postcss-cssnext)
- [cssnano](https://github.com/ben-eb/cssnano)

```bash
npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano --S

# 或者 yarn
yarn add postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano --S
```

查看依赖包：

```json
"dependencies": {
    "cssnano": "^4.1.10",
    "postcss-aspect-ratio-mini": "^1.0.1",
    "postcss-cssnext": "^3.1.0",
    "postcss-px-to-viewport": "^1.1.0",
    "postcss-viewport-units": "^0.1.6",
    "postcss-write-svg": "^3.0.1",
    "vue": "^2.5.2",
    "vue-router": "^3.0.1"
  },
```

配置 `.postcssrc.js` 文件，对新安装的 PostCSS 插件进行配置：

```js
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines"],
      minPixelValue: 1,
      mediaQuery: false
    },
    "postcss-viewport-units": {},
    cssnano: {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
};
```

[DEMO]()

扫一扫下面的二维码

#### 2.2.移动端适配 rem 方案

> 最近看了很多移动适配的文章，还没消化，先积累着。搞懂移动端适配问题，先明白像素和视口。

设备的像素？

设备像素 (device pixel, dp): 又称为物理像素。单位 pt。pt 在 css 单位中属于真正的绝对单位，1pt = 1/72 (inch), inch 及英寸，而 1 英寸等于 2.54 厘米。所以设备像素的特点就是大小固定，不可变。比如 iPhone 5 的分辨率为 640 x 1136px.

CSS 像素?

在 CSS、JS 中使用的一个抽象的概念，单位是 px。

> CSS 像素也可以称为设备独立像素 (device-independent pixels)，简称为 dips，单位是 dp。

[DPI 计算/PPI 计算参考网站](https://www.sven.de/dpi/)

- [简单粗暴的移动端适配方案](https://imweb.io/topic/5a523cc0a192c3b460fce3a5)

哈哈哈。会不会有 rem & vw 混用的呢？

#### 2.3.px 单位和媒体查询，flex 布局的方式？

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

### 4.webp 图片的浏览器兼容检测？
