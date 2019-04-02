# React

### 1.react 的 key 的作用以及实现原理，并设定一个具体情境进行分析

### 2.React 里什么时候用 Context？

### 3.reader props 是什么？ 什么时候用？

### 4.路由如何做权限校验？

### 5.如何正确理解 React 的生命周期？

每个 React 组件都会经历挂载(Mounting)、更新(Updating)、和卸载(Unmounting)的过程。

React 每个过程都提供一些钩子函数，让我们可以自定义一些事情。

### 6.React 在什么时候比较适合做 SSR？

React 在有 Node 做中间层的时候比较适合做 SSR，另一方面需要看业务，如果网站需要 SEO，那么就需要做 SSR。后台系统、WebAPP 倒不需要 SSR。

### 7.react 的 diff 算法基本原理与源码解释?

### 8.如何细粒度地控制 react 组件更新?

### 9.JS 的基本函数式使用，比如 reduce、curry?

### 10.对 Redux 和 Mobx 的设计理念理解？

### 11.virtual-dom 的基本原理与简单的源码解释？

### 12.pure-component 和 shouldComponentUpdate 相关概念的考察？

### 13.你认为 React 有什么应该 deprecate 的特性?

### 14.你可以聊一聊怎么改良一个 React 的数据流 lib 吗? (哈哈哈，在知乎上看到这题。(ಥ_ಥ))


## React Redux

### 1.React Redux 怎么处理多线程文档，管理多个请求并发的问题？

JS 是单线程的，但是可以做到请求并发，如果想要多个请求都返回时才处理，可以使用 Promise.all

#### 1.1.如何看待用 worker 的方式启动新线程(var worker = new Worker(js file path))？

在有密集计算，又不希望卡主线程的情况下，原来只能用 `setTimeout` 分片，现在可以用 worker 了，有实际使用场景下非常棒。
