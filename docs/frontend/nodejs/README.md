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

```js
// increment.js

var add = require('math').add;
export.increment = function(val) {
  return add(val, 1);
}
```

```js
// program.js

var inc = require("increment").increment;
var a = 1;
inc(a); // 2

module.id == "program";
```

node.js 模块，通常一个模块是一个遵循 CommonJS 规范书写的 JavaScript 源文件，也可能是一个后缀为 `*.node` 的 C++ 模块二进制文件，通过 require() 函数被引入并且使用。

### 8.Node.js 模块机制与包机制，由什么第三方依赖所构成？

- CommonJS 规范中的包(package) 指的是一系列模块、代码以及其他资源文件的一个封装。

包描述文件： 一个遵循 CommonJS 规范的包必然包含一个包描述文件。并且处于包根目录下，名为 `package.json`。包含的[必要信息](http://wiki.commonjs.org/wiki/Packages/1.0)

包目录结构(一个遵循 CommonJS 规范的包目录如下)：

- package.json 在根目录下
- 二进制文件应在 bin 目录下
- JavaScript 源码应当在 lib 目录下
- 文档应在 doc 目录下
- 单元测试文件应在 test 目录下

**模快机制**

**包机制**

**依赖**

### 9.Node.js 的模块寻径算法和模块缓存机制？

### 10.Node.js 事件循环

Node.js 事件循环是由 libuv 这个类库进行驱动的，直接用的就是 libuv 的事件循环，在 Node.js v6.9.4 下，[这几行代码](https://github.com/nodejs/node/blob/v6.9.4/src/node.cc#L4690-L4698), 点链接查看，其他版本的 `src/node.cc` 也有对相关的代码，代码如下：

```cpp
NodeInstanceData instance_data(NodeInstanceType::MAIN,
                                uv_default_loop(),
                                argc,
                                const_cast<const char**>(argv),
                                exec_argc,
                                exec_argv,
                                use_debug_agent);
StartNodeInstance(&instance_data);
exit_code = instance_data.exit_code();
```

在 Node.js 源码 `deps` 目录下，有除了 Chrome V8 和 libuv 以外的依赖。

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
