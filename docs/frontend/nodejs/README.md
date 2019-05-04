# node.js

## 文档

- [Node.JS 中文文档](http://nodejs.cn/api/)

### 1.写一个小服务可以通过 URL 下载文件？ (大文件是否能下载) stream。

### 2.多线程的几种实现方式与 NodeJS 中的实现?

### 3.内存泄露问题的解释？

### 4.NodeJS 的模块机制理解?

### 5.koa/co/async 等模块原理机制了解透彻？

### 6.V8 的性能和稳定性优化，能对系统整体性能进行评估，内存瓶颈如何解决？

### 7.CommonJS 规范、AMD 规范、CMD 规范？

**CommonJS 规范**

require：是一个函数，该函数有一个参数代表模块标识，它的返回值就是其所引用的外部模块所暴露的 API。

模块上下文：在 CommonJS 模块的上下文中，需要有满足如下条件的一些事物存在。

- 1.require, 上条提到
- 2.一个名为 `exports` 的对象，该对象里挂载的内容会被暴露到模块外面去
- 3.一个名为 `module` 的对象，里面包含了这个模块的一些自带属性。实际上在 node.js 中还有一个 exports 对象，其初始指针指向和 exports 相同，而且模块暴露出去的是 `module` 中的 exports。

模块标识：模块标识其实就是一个字符串，用于传给 require 函数。

遵循 CommonJS 规范的简单样例代码：

```js
// math.js
exports.add = function() {
  var sum = 0, i = 0, args = arguments, 1 = args.length;
  while(i < 1) {
    sum += args[i++];
  }
  return sum;
};
```

### 8.Node.js 模块机制与包机制，由什么第三方依赖所构成？

**模快机制**

**包机制**

**依赖**

## 一些深入学习 node.js 的参考

- [node.js 实现模块化源码学习](https://github.com/JiayiLi/node.js-module)
- 《Node.js 来一打 C++ 扩展》

## 资源整理

- [Node.js 控制键盘鼠标相关包 #47](https://github.com/hax/hax.github.com/issues/47)

## V8

- 内存机制、基本对象，句柄、句柄作用域、模板、常用的数据类型。

## binding.gyp 配置文件

GYP 文件格式的基础，

## 特性

底层：Chrome V8、libuv、Node.js 相关源码

### Node.js 8.0 之后

- C++ 原生扩展接口 `N-API`

### Nodejs 12 新特性

目前而言，Node.js 6.x 和 8.x 将在 2019 年末结束 LTS 的支持，尽快升级到 10.x 吧。
