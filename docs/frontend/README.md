# 前端基础

## HTML

### 1.给一个页面，比方说淘宝首页，如何得到这个页面里一共用了多少种 HTML 标签？

## JavaScript

### 1.闭包？

- 闭包是指有权访问另一个函数作用域中的变量的函数 (就是能够读取其它函数内部变量的函数，可以理解为**定义在函数内部的函数** )；
- 创建闭包的常见方式，就是在一个函数内部创建另一个函数；
- 通过另一个函数访问这个函数的局部变量，利用闭包可以突破作用链域。

闭包作用，缺点？

- 作用：读取函数内部的变量，让这些变量始终保持在内存中，避免全局变量的污染；另一个是封装对象的私有属性和私有方法；
- 缺点：消耗内存，因为会使变量常驻内存中，不正当使用会造成内存溢出问题。

使用闭包的注意点：

- 闭包会使函数内部的变量被保存在内存中，所以不能滥用闭包，否则会造成网页的性能问题。解决方法是，在函数退出之前，将不使用的局部变量全部删除；
- 闭包会在父函数外部，改变父函数内部变量的值。如果将父函数当做对象(Object)使用，把闭包当作它的公用方法(Public Method)，把内部变量当作它的私有属性(Private Value), 这个时候需要注意不要随便改变父函数内部变量的值。

### 2.原型链？

原型、原型链

### 3.继承？

### 4.自己平时在项目中如何封装()?

### 5.script 标签中 defer 和 async 的区别？

### 6.深浅拷贝的区别和用途？

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

#### 10.1 使用 Ajax 的优缺点分别是什么？

优点：

- 交互性好，来自服务器的新内容可以动态更改，无需重新整个页面；
- 减少与服务器的连接，因为脚本和样式只需要被请求一次；
- 状态可以维护在一个页面上，JavaScript 变量和 DOM 状态将得到保持，因为主容器页面未被重新加载。

缺点

### 11.抖机灵题目

>某天在群里看到的题目

下面代码 a 在什么情况下会打印出 1？

```js
var a = ?

if(a==1 && a==2 && a==3) {
  console.log("1");
}
```

```js
var a=[1,2,3];
a.join = a.shift;
if(a==1 && a==2 && a==3) {
  console.log("1");
}
```
emmmm,https://zhuanlan.zhihu.com/p/33029291


## CSS

### 1.CSS 有哪些实现布局的方式？

### 2.CSS 命名冲突如何解决？

### 3.

### x.Privacy and the :visited selector?

## 浏览器

### 1.一般看是不是浏览器 bug，就看不同浏览器表现是否相同。

## 移动端适配

> 最近看了很多移动适配的文章，还没消化，先积累着。搞懂移动端适配问题，先明白像素和视口。

设备的像素？

设备像素 (device pixel, dp): 又称为物理像素。单位 pt。pt 在 css 单位中属于真正的绝对单位，1pt = 1/72 (inch), inch 及英寸，而 1 英寸等于 2.54 厘米。所以设备像素的特点就是大小固定，不可变。比如 iPhone 5 的分辨率为 640 x 1136px.

CSS 像素?

在 CSS、JS 中使用的一个抽象的概念，单位是 px。

> CSS 像素也可以称为设备独立像素 (device-independent pixels)，简称为 dips，单位是 dp。

[DPI 计算/PPI 计算参考网站](https://www.sven.de/dpi/)

### 1.rem 移动端适配原理

## 正则

- 写写 demo, 匹配 email，3 的倍数，如果不知道正确的格式，那么怎么去知道正确的格式？

## 前端安全防范知识

### 1.XSS？

### 2.CSP？

### 3.CSRF？

### 4.rAF

等...

## 域名
