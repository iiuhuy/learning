# React

### 1.react 的 key 的作用以及实现原理，并设定一个具体情境进行分析

React 可以具有一个特殊的属性 `key`，这个属性不是给用户自己用的，而是给 React 自己用的。

如果动态创建一个 React 元素，而且 React 元素内包含数量或顺序不确定的子元素时，就需要提供 `key` 这个特殊的属性。

例如有这样的代码： 

```js
const userList = props => (
  <div>
    <h3>用户列表</h3>
    {props.users.map(u => <div>{u.id}:{u.name}</div>)}  // 没有提供 key
  </div>
);
```

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

### 10.对 Redux 和 Mobx 的「设计理念」理解？

### 11.virtual-dom 的基本原理与简单的源码解释？



### 12.pure-component 和 shouldComponentUpdate 相关概念的考察？

**shouldComponentUpdate**

- 1.决定 Virtual DOM 是否需要重绘
- 2.一般可以由 `PureComponent` 自动实现
- 3.典型场景：性能优化

**pure-component**

可以判断当前的 State 和之前的 State，当前的 props 和之前的 props 是否有变化，如果没有变化，它会自动阻止 React 去重新更新。

### 13.你认为 React 有什么应该 deprecate 的特性?

### 14.你可以聊一聊怎么改良一个 React 的数据流 lib 吗? (哈哈哈，在知乎上看到这题。(ಥ_ಥ))

### 15.React Component & PureComponent 的区别？

### 16.props & state?

### 17.什么时候可以[直接修改] state 的值？

在 Constructor 里面修改，一般来说要更新 state 都会使用 `setState` 方法， Constructor 里面什么事情都还没有做，可以使用 `this.state.xxx = "xxx"` 这样的形式修改，这也是唯一可以直接修改 State 的方法。



### 约定

- React 认为小写的 tag 是原生 DOM 节点，如 `div`;
- 大写字母开头为自定义组件；
- JSX 标记可以直接使用属性语法，例如 `<menu.Item/>` 

## React Redux

### 1.React Redux 怎么处理多线程文档，管理多个请求并发的问题？

JS 是单线程的，但是可以做到请求并发，如果想要多个请求都返回时才处理，可以使用 Promise.all

#### 1.1.如何看待用 worker 的方式启动新线程(var worker = new Worker(js file path))？

在有密集计算，又不希望卡主线程的情况下，原来只能用 `setTimeout` 分片，现在可以用 worker 了，有实际使用场景下非常棒。
