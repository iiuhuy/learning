# React

### 1.React 里的 key 有什么用？

### 2.React 里什么时候用 Context？

### 3.reader props 是什么？ 什么时候用？

### 4.路由如何做权限校验？

### 5.如何正确理解 React 的生命周期？

每个 React 组件都会经历挂载(Mounting)、更新(Updating)、和卸载(Unmounting)的过程。

React 每个过程都提供一些钩子函数，让我们可以自定义一些事情。

### 6.React 在什么时候比较适合做 SSR？

React 在有 Node 做中间层的时候比较适合做 SSR，另一方面需要看业务，如果网站需要 SEO，那么就需要做 SSR。后台系统、WebAPP 倒不需要 SSR。



## React Redux

### 1.React Redux 怎么处理多线程文档，管理多个请求并发的问题？

JS 是单线程的，但是可以做到请求并发，如果想要多个请求都返回时才处理，可以使用 Promise.all

#### 1.1.如何看待用 worker 的方式启动新线程(var worker = new Worker(js file path))？

在有密集计算，又不希望卡主线程的情况下，原来只能用 `setTimeout` 分片，现在可以用 worker 了，有实际使用场景下非常棒。