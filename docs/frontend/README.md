# 前端基础

## HTML

### 1.给一个页面，比方说淘宝首页，如何得到这个页面里一共用了多少种 HTML 标签？

### 2.innerHTML 和 innerText 的区别？

### 3.clientWidt、offsetWidth、scrollWidth 的区别？

### 4.HTML 5 的新 API？

- `<video>/<audio>`
- Canvas
- webGL
- File API
- App Cache
- localStorage
- IndexedDB
- Drag & Drop
- 高级的 DOM API、Fetch API 等等

## JavaScript

闭包、IIFE、prototype 以及一些底层实现(ES、VO、AO)；
熟悉常用的设计模式与 JavaScript 范式(比如实现类与私有属性)；
ES6，包括 class、module、arrow function 等等。

### 1.闭包？

- 闭包是指有权访问另一个函数作用域中的变量的函数 (就是能够读取其它函数内部变量的函数，可以理解为**定义在函数内部的函数** )；
- 创建闭包的常见方式，就是在一个函数内部创建另一个函数；
- 通过另一个函数访问这个函数的局部变量，利用闭包可以突破作用链域。

#### 1.1.闭包作用，缺点？

- 作用：读取函数内部的变量，让这些变量始终保持在内存中，避免全局变量的污染；另一个是封装对象的私有属性和私有方法；
- 缺点：消耗内存，因为会使变量常驻内存中，不正当使用会造成内存溢出问题。

使用闭包的注意点：

- 闭包会使函数内部的变量被保存在内存中，所以不能滥用闭包，否则会造成网页的性能问题。解决方法是，在函数退出之前，将不使用的局部变量全部删除；
- 闭包会在父函数外部，改变父函数内部变量的值。如果将父函数当做对象(Object)使用，把闭包当作它的公用方法(Public Method)，把内部变量当作它的私有属性(Private Value), 这个时候需要注意不要随便改变父函数内部变量的值。

### 2.原型？

如何理解原型。

#### 2.1.**proto** 和 prototype 的含义和区别(关系)？

#### 2.2.原型链，原型链的作用？

### 3.继承？

如何实现继承，不同方式实现继承的优缺点？

### 4.自己平时在项目中如何封装()?

### 5.script 标签中 defer 和 async 的区别？

### 6.深拷贝、浅拷贝的区别和用途？

> 其实可以理解为深拷贝和浅拷贝的主要区别就是其在内存中的存储类型不同。

可以参考知乎[javascript 中的深拷贝和浅拷贝？](https://www.zhihu.com/question/23031215)。

- https://cherryblog.site/deepcopy.html

#### 6.1.浅拷贝

概念

如何实现浅拷贝？

- ES6：object.assign()
- 展开运算符…
- 自己封装函数实现

#### 6.2.深拷贝

深拷贝是对对象以及对象的所有子对象进行拷贝。

如何进行深拷贝呢？

- JSON.parse () (但是如果里面有 function 和 undefined 不可用)
- lodash
- 自己封装

#### 6.3.null 和 undefined 的差异？

### 7.ES 里的 Generator 是怎么运行的？ 和 async + await 有什么区别？

### 8.symbol、尾递归优化需要准备什么？

### 9.创建对象的方式有哪些？

### 10.Ajax ？

Ajax 出现之前最常用的方式是使用 form 表单；

Ajax 是 Asynchronous JavaScript and XML（异步的 JavaScript 与 XML 技术）的缩写，并不是 JavaScript 的一部分，而是网页与服务器通信的一系列技术的总称。

使用

浏览器提供了 XMLHttpRequest 对象(低版本 IE 使用 ActiveObject 对象)，让我们能够方便地使用 Ajax:

```js
var xhr;

if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // IE6 及以下
  xhr = new ActiveXObject("Microsofr.XMLHTTP");
}

// 绑定 xhr.readyState 改变时调用的回调
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      console.log("请求成功！");
    } else {
      console.log("请求错误");
    }
  }
};

// 初始化请求
xhr.open("GET", "/api/hello");

// 设置请求头(可选)
xhr.setRequestHeader("Accept", "*/*");

// 发送请求
xhr.send();
```

XMLHttpRequest API 经常用于异步通信。此外还有最近流行的 fetch API。

#### 10.1.readyState 五种状态的含义是什么?

#### 10.2.使用 Ajax 的优缺点分别是什么？

优点：

- 交互性好，来自服务器的新内容可以动态更改，无需重新整个页面；
- 减少与服务器的连接，因为脚本和样式只需要被请求一次；
- 状态可以维护在一个页面上，JavaScript 变量和 DOM 状态将得到保持，因为主容器页面未被重新加载。
- 基本上包括大部分 SPA 的优点。

缺点：

- 动态网页很难收藏；
- 如果 JavaScript 已在浏览器中被禁用，则不起作用；
- 有些网络爬虫不执行 JavaScript，也不会看到 JavaScript 加载的内容；
- 基本上包括大部分 SPA 的缺点。

#### 10.2.[JSONP 的工作原理是什么？](https://www.zhihu.com/question/19966531)，它为什么不是真正的 Ajax?

JSONP（带填充的 JSON）是一种通常用于绕过 Web 浏览器中的跨域限制的方法，因为 Ajax 不允许跨域请求。

JSONP 通过 `<script>` 标签发送跨域请求，通常使用 callback 查询参数，例如：`https://example.com?callback=printData`, 然后服务器将数据包装在一个名为 `printData` 的函数中并将其返回给客户端。

### 11.跨域请求？

浏览器出于安全考虑不允许发送[跨域请求](https://www.zhihu.com/question/26376773)，但有时候向不同域的服务器发送请求是必要的。

为了标准化跨域请求流程，W3C 提出了[跨域资源共享](http://www.ruanyifeng.com/blog/2016/04/cors.html)（Cross-origin resource sharing，简称 CORS）标准，在 CORS 出现之前，通常是使用 [JSONP](https://www.zhihu.com/question/19966531) 来取巧地解决跨域问题，但由于 JSONP 存在各种限制，因此在支持 CORS 的浏览器中（IE10 以下不支持）还是推荐使用 CORS。

### 12.什么是单页应用？

单页应用的全称是 single-page application，简称 SPA，它是一种网站应用的模型，它可以动态重写当前的页面来与用户交互，而不需要重新加载整个页面。

工作原理：

SPA 的一个重要实现就是改变路由时，页面不刷新。实现这个功能，通常有两种方式：使用 window.history 对象或 location.hash。

#### 它的优缺点(了解)

优点:

- 无刷新体验，用户在切换页面过程中不会频繁被`打断`，因为界面框架都在本地，对用户的相应非常及时，因此提升了用户体验；
- 分离前后端关注点，前端负责界面显示，后端负责数据存储和计算，各司其职；
- 减轻服务器压力，服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍；
- API 共享，同一套后端程序代码，不用修改就可以用于 Web 界面、手机、平板等多种客户端；
- 完全的前端组件化，前端开发不再以页面为单位，更多地采用组件化的思想，代码结构和组织方式更加规范化，便于修改和调整。

缺点:

- 对 SEO 不太优好，尽管可以通过 [Prerender](https://prerender.io/) 预渲染优化等技术解决一部分，但是相对还是不容易索引到它；
- 易出错，需要使用程序管理前进、后退、地址栏等信息；
- 较高的前端开发门槛，对技术能力要求较高，需要对设计模式有一定理解，因为面对不是一个简单的页面，而是一个运行在浏览器环境里面的桌面软件。

### 13.[Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)

Fetch API 提供了一个获取资源的接口（包括跨域请求）。任何使用过 XMLHttpRequest 的人都能轻松上手，但新的 API 提供了更强大和灵活的功能集。

- [XHR](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
- [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)

[Fetch 规范](https://fetch.spec.whatwg.org/)，英语好的情况下。

Fetch 基本概念：

四个基本概念，分别是 Headers、Request 、Response 和 Body。

#### 13.1 Fetch 与 XHR 比较

Fetch 相对 XHR 来说具有简洁、易用、声明式、天生基于 Promise 等特点。XHR 使用方式复杂，接口繁多，最重要的一点个人觉得是它的回调设计，对于实现 try...catch 比较繁琐。

不足：

- 不能取消（虽然 [AbortController](https://developer.mozilla.org/zh-CN/docs/Web/API/FetchController) 能实现，但是目前兼容性基本不能使用，可以使用 [polyfill](https://github.com/mo/abortcontroller-polyfill) ）;
- 不能获取进度;
- 不能设置超时（可以通过简单的封装来模拟实现）;
- 兼容性目前比较差（可以使用 polyfill 间接使用 XHR 来优雅降级，这里推荐使用 [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) ）

在整体了解熟悉 fetch 之后，能够读一下 [github polyfill](https://github.com/github/fetch) 源码。在读代码的同时，可以同时参考 [Fetch 规范](https://fetch.spec.whatwg.org/)。

参考：

- 1.[Fetch 也许不是你想的那样简单](https://blog.godotdotdot.com/2018/12/28/Fetch%E4%B9%9F%E8%AE%B8%E4%B8%8D%E6%98%AF%E4%BD%A0%E6%83%B3%E7%9A%84%E9%82%A3%E6%A0%B7%E7%AE%80%E5%8D%95/)
- 2.[]()

### 14.抖机灵题目

> 某天在群里看到的题目

下面代码 a 在什么情况下会打印出 1？

```js
var a = ?

if(a==1 && a==2 && a==3) {
  console.log("1");
}
```

```js
var a = [1, 2, 3];
a.join = a.shift;
if (a == 1 && a == 2 && a == 3) {
  console.log("1");
}
```

emmmm, [可以参考这里](https://zhuanlan.zhihu.com/p/33029291)

### 15.this?

this 代表什么？
this 的指向？
apply,call,bind 的作用和区别？
实现 apply,call,bind?

### 16.ES6 有哪些常用的功能？

### 17.为什么要使用模块化，有哪些实现模块化的方法？

- 

可能 Require.js/AMD 已经再见了，但是

> 参考：黄玄(huangxuan)的分享《JavaScript Modularization Seven Day》 来学习 JS 模块化的历史） https://huangxuan.me/js-module-7day

### 18.什么是防抖、节流？ 怎么实现？

### 19.new 的原理是什么？怎么样实现一个 new？

### 20.异步?

#### 20.1.Generator?

你如何理解 Generator

#### 20.2.Promise?

Promise 是什么？
Promise 的特点是什么，分别有什么优缺点？
Promise 的链式调用如何实现？
异步操作封装成 Promise，实现对 Ajax 封装？
Promise then 的第二个参数和 catch 的区别？
手写一个 Promise？

#### 20.3.async、await？

async、await 的特点？
优缺点?
await 的原理是什么？

### 21.如何转为数组？ arguments 是数组吗？

### 22.slice、substr、substring 的区别？

---

## CSS

命名规范：

CSS 命名一般采用小写英文单词或组合命名，单词与单词间以 `-` 分割；英文单词不缩写，除非一看就能明白的单词。

文本命名规范:

```
index.css: 一般用于首页建立样式;
head.css: 头部样式，当多个页面头部设计风格相同时使用;
base.css: 共用样式;
style.css: 独立页面所使用的样式文件;
global.css: 页面样式基础，全局公用样式，页面中必须包含;
layout.css: 布局、版面样式，公用类型较多时使用，一般用在首页级页面和产品类页面中;
module.css: 模块，用于产品类页，也可与其它样式配合使用;
master.css: 主要的样式表;
columns.css: 专栏样式;
themes.css: 主体样式;
forms.css: 表单样式;
mend.css: 补丁，基于以上样式进行的私有化修补。
```

页面结构命名：

```
page: 代表整个页面，用于最外层;
wrap: 外套，将所有元素包在一起的一个外围包，用于最外层;
wrapper: 页面外围控制整体布局宽度，用于最外层;
container: 一个整体容器，用于最外层;
head, header: 页头区域，用于头部;
nav: 导航条;
content: 内容，网站中最重要的内容区域，用于网页中部主体;
main: 网站中的主要区域（表示最重要的一块位置），用于中部主体内容;
column: 栏目;
sidebar: 侧栏;
foot,footer: 页尾、页脚。网站一些附加信息放置区域，（或命名为 copyright）用于底部;
```

导航命名：

```
nav, navbar, navigation, nav-wrapper: 导航条或导航包，代表横向导航;
topnav: 顶部导航;
mainbav: 主导航;
subnav: 子导航;
sidebar: 边导航;
leftsidebar 或 sidebar_a: 左导航;
rightsidebar 或 sidebar_b: 右导航;
title: 标题;
summary: 摘要;
menu: 菜单，区域包含一般的链接和菜单;
submenu: 子菜单;
drop: 下拉;
dorpmenu: 下拉菜单;
links: 链接菜单;
```

功能命名:

```
logo: 标记网站 logo 标志；
banner: 标语、广告条、顶部广告条；
login: 登陆，（例如登录表单：form-login）；
loginbar: 登录条；
register: 注册；
tool, toolbar: 工具条；
search: 搜索；
searchbar: 搜索条；
searchlnput: 搜索输入框；
shop: 功能区，表示现在的；
icon: 小图标；
label: 商标；
homepage: 首页；
subpage: 二级页面子页面；
hot: 热门热点；
list: 文章列表，（例如：新闻列表：list-news）；
scroll: 滚动；
tab: 标签；
sitemap: 网站地图；
msg 或 message: 提示信息；
current: 当前的；
joinus: 加入；
status: 状态；
btn: 按钮，（例如：搜索按钮可写成：btn-search）；
tips: 小技巧；
note: 注释；
guild: 指南；
arr, arrow: 标记箭头；
service: 服务；
breadcrumb: (即页面所处位置导航提示）；
download: 下载；
vote: 投票；
siteinfo: 网站信息；
partner: 合作伙伴；
link, friendlink: 友情链接；
copyright: 版权信息；
siteinfoCredits: 信誉；
siteinfoLegal: 法律信息。
```

### 1.CSS 有哪些实现布局的方式？

#### 1.1 怎么实现三列布局（左侧和右侧宽度固定，中间自适应）？

- 绝对定位 + 中间版块不给宽度;
- 两侧浮动 + 中间自动撑开（使用 calc 动态计算宽度，设置对应宽度的 margin）;
- flex，左右设置 flex-basis，中间设置 flex-grow。

#### 1.2.设为 flex 属性之后，子元素的哪些属性会失效？

float、clear 和 vertical-align

### 2.CSS 命名冲突如何解决？

### 3.垂直居中的方式？

> 参考： https://yanhaijing.com/css/2018/01/17/horizontal-vertical-center/

### x.Privacy and the :visited selector?

---

## Canvas

canvas 绘图先要获取绘图上下文：

```js
vat context = canvas.getContext('2d');
```

在 context 上调用各种函数绘制图形，比如：

```js
// 绘制左上角为 (0,0)，右下角为 (50,50) 的矩形
context.fillRect(0, 0, 50, 50);
```

Canvas 的知识可以参考：

-

---

## 浏览器

### 1.一般看是不是浏览器 bug，就看不同浏览器表现是否相同。

### 2.动态网站、静态网站的区别？

网站按动静态来分，分为动态网站、静态网站和伪静态网站。

采用动态网页还是静态网页主要取决于网站的功能需求和网站内容的多少，功能少，简单，更新不大，使用纯静态肯定会简单，不然反之就用动态。

流行的伪静态网站是动态网站处理后呈现的静态模式，两者的优势都具备。

为了网站适应搜索引擎检索的需要，即使采用动态网站技术，也可以将网页内容转化为静态网页发布

动态网页的特点：

- 1.动态网页是与静态网页相对应的，也就是说，网页 URL 的后缀不是 `.htm`、`.html`、`.shtml`、`.xml`等静态网页的常见形式，而是以 `.asp`、`.jsp`、`.php`、`.perl`、`.cgi`等形式为后缀。动态网页网址中有一个标志性的符号 ——`?`
- 2.采用动态网页技术的网站可以实现更多的功能，如用户注册、用户登录、在线调查、用户管理、订单管理等等；
- 3.动态网页以数据库技术为基础，可以大大降低网站维护的工作量；
- 4.动态网页中的 `?` 对搜索引擎检索存在一定的问题，搜索引擎一般不可能从一个网站的数据库中访问全部网页，或者出于技术方面的考虑，搜索蜘蛛不去抓取网址中 `?` 后面的内容，因此采用动态网页的网站在进行搜索引擎推广时需要做一定的技术处理才能适应搜索引擎的要求；
- 5.动态网页实际上并不是独立存在于服务器上的网页文件，只有当用户请求时服务器才返回一个完整的网页，所以对服务器要求要比静态网站对服务器的要求要高很多。

静态网页的特点:

- 1.静态网页是以`.htm`、`.html`、`.shtml`、`.xml` 等为后缀的；
- 2.静态网页的内容相对稳定，因此容易被搜索引擎检索；
- 3.静态网页的交互性较差，在功能方面有较大的限制；
- 4.网页内容一经发布到网站服务器上，无论是否有用户访问，每个静态网页的内容都是保存在网站服务器上的，也就是说，静态网页是实实在在保存在服务器上的文件，每个网页都是一个独立的文件；
- 5.静态网页没有数据库的支持，在网站制作和维护方面工作量较大，因此当网站信息量很大时完全依靠静态网页制作方式比较困难。

总结：动态网页和静态网页最简单的最直接的判断就是看网址的后缀！！！

> 参考：https://zhuanlan.zhihu.com/p/22817889

---

## 移动端适配

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

### 1.rem 移动端适配原理(rem 单位换算)？

---

## 前端安全防范知识

### 1.XSS？

### 2.CSP？

### 3.CSRF？

### 4.rAF

### 5.CSP？

优秀的前端工程师，连 CSP 都搞不清楚，还能指望开发出安全的 Web 钱包？

等...

## 域名
