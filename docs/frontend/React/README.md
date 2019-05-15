# React

### 1.react 的 key 的作用以及实现原理，并设定一个具体情境进行分析

React 可以具有一个特殊的属性 `key`，这个属性不是给用户自己用的，而是给 React 自己用的。

如果动态创建一个 React 元素，而且 React 元素内包含数量或顺序不确定的子元素时，就需要提供 `key` 这个特殊的属性。

例如有这样的代码：

```js
const userList = props => (
  <div>
    <h3>用户列表</h3>
    {props.users.map(u => (
      <div>
        {u.id}:{u.name}
      </div>
    ))} // 没有提供 key
  </div>
);
```

### 2.React 里什么时候用 Context？

### 3.reader props 是什么？ 什么时候用？

### 4.路由如何做权限校验？

### 5.如何正确理解 React 的生命周期？

[可以参考这个图](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190504011403.png"/>

每个 React 组件都会经历挂载(Mounting)、更新(Updating)、和卸载(Unmounting)的过程。

React 每个过程都提供一些钩子函数，让我们可以自定义一些事情。

**constructor**

- 1.用于初始化内部状态
- 2.唯一可以直接修改 State 的地方

**getDerivedStateFromProps**

- 1.当 State 需要从 props 初始化时使用
- 2.尽量不要使用：维护两者状态一致性会增加复杂度(可以通过计算获得，不用单独存储，不然就得维护两者的一致性)
- 3.每次 render 都会调用
- 4.典型场景：表单控件获取默认值

**componentDidMount**

- 1.UI 渲染完成后调用
- 2.只执行一次
- 3.典型场景：获取外部资源

**componentWillUnmount**

- 1.组件移除时被调用
- 2.典型场景: 资源释放

**getSnapshotBeforeUpdate**

- 1.在页面 render 之前调用，State 已更新
- 2.典型场景：获取 render 之前的 DOM 状态

**componentDidUpdate**

- 1.每次 UI 更新时被调用
- 2.典型场景：页面需要根据 props 变化重新获取数据

**△shouldComponentUpdate**

- 1.决定 VirtualDOM 是否要重绘
- 2.一般可以由 **PureCommont** 自动实现
- 3.典型场景：性能优化

### 6.pure-component 和 shouldComponentUpdate 相关概念的考察？

**shouldComponentUpdate**

- 1.决定 Virtual DOM 是否需要重绘
- 2.一般可以由 `PureComponent` 自动实现
- 3.典型场景：性能优化

**pure-component**

可以判断当前的 State 和之前的 State，当前的 props 和之前的 props 是否有变化，如果没有变化，它会自动阻止 React 去重新更新。

### 7.组件生命周期？

### 8.React 在什么时候比较适合做 SSR？

React 在有 Node 做中间层的时候比较适合做 SSR，另一方面需要看业务，如果网站需要 SEO，那么就需要做 SSR。后台系统、WebAPP 倒不需要 SSR。

### 9.react 的 diff 算法基本原理与源码解释?

### 10.如何细粒度地控制 react 组件更新?

### 11.JS 的基本函数式使用，比如 reduce、curry?

### 12.对 Redux 和 Mobx 的「设计理念」理解？

### 13.virtual-dom 的基本原理与简单的源码解释？

### 14.你认为 React 有什么应该 deprecate 的特性?

### 15.聊一聊怎么改良一个 React 的数据流 lib 吗? (哈哈哈，在知乎上看到这题。(ಥ_ಥ))

### 16.React Component & PureComponent 的区别？

### 17.props & state?

### 18.什么时候可以[直接修改] state 的值？

在 Constructor 里面修改，一般来说要更新 state 都会使用 `setState` 方法， Constructor 里面什么事情都还没有做，可以使用 `this.state.xxx = "xxx"` 这样的形式修改，这也是唯一可以直接修改 State 的方法。

### 约定

创建组件的单一职责原则：

- 1.每个组件只做一件事
- 2.如果组件变得复杂，那么应该拆分成小组件

- React 认为小写的 tag 是原生 DOM 节点，如 `div`;
- 大写字母开头为自定义组件；
- JSX 标记可以直接使用属性语法，例如 `<menu.Item/>`

## 组件模式

有状态组件-无状态组件、容器组件-展示组件、高阶组件-渲染回调(函数作为子组件)

## React Redux

Redux 并不是必须的，只是良好的解决了状态管理，减少维护时候的 bug。

<!-- <img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190504200938.svg"/> -->

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190504202756.png"/>

> 题图来自 https://css-tricks.com/learning-react-redux/

Redux 让组件通信变得更加容易。

Redux 特性：

- 1.Single Source of Truth，所有的状态都放在唯一的 store 中
- 2.可预测性： State + action = new State
- 3.纯函数更新 Stroe

```js
function todos(stete = [], action) {
  switch (action.type) {
    case: 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false}])
    case: 'TOGGLE_TODO':
      // state.map 生成了一个新的对象
      return state.map (
        (todo, index) =>
          action.index === index
            ? { text: todo.text, completed: !todo.completed }
            : todo
      )
    default:
      return state
  }
}
```

React & Redux 是如何配置的？ react-redux 提供了 connect 和 Provider，一个将组件与 redux 关联起来，一个将 store 传递给组件。组件通过 dispatch 发出的 action，store 根据 action 的 type 属性调用对应的 reducer 并传入 setState 更新组件，组件的 props 也就跟随变化了。

Redux 主要由三部分组成： store、action reducer。

**store** 是一个对象，主要有 4 个方法：

```js
// 产生一个 store 只需要 createStore
let store = createStore(todoApp);
```

1.getState()

获取 store 中的 state, 用 action 触发 reducer 改变 state 时，需要再拿到新的 state 里的数据，毕竟数据才是我们想要的。

getState 主要在两个地方需要用到：

- 一是在 dispatch 拿到 action 后 store 需要用它来获取 state 里的数据，并把这个数据传给 reducer，这个过程是自动执行的
- 二是在我们利用 subscribe 监听到 state 发生变化后调用它来获取新的 state 数据，如果做到这一步，说明我们已经成功了

  2.dispatch(action)

例如 UI 上当用户点击一个 button 的时候就产生了一个 action，store 就把它 dispatch 出去，dispatch 给 reducer。

在 createStore 中可以用 middleware 中间件对 dispatch 进行改造，比如当 action 传入 dispatch 会立即触发 reducer，有些时候我们不希望它立即触发，而是等待异步操作完成之后再触发，这时候用 redux-thunk 对 dispatch 进行改造，以前只能传入一个对象，改造完成后可以传入一个函数，在这个函数里我们手动 dispatch 一个 action 对象，这个过程是可控的，就实现了异步

3.subscribe(listener)

监听 store 的变化，在 store 调用 dispatch 时会注册一个 listener 监听 state 变化。

4.replaceReducer(nextReducer)

替换 reducer，改变 state 修改的逻辑。

**action**, 是一个对象，其中 type 属性是必须的，同时可以传入一些数据。

action 可以使用 actionCreator 进行创造, dispatch 就是把 action 对象发送出去。

**reducer**, 是一个函数，接收两个参数。一个 state 和一个 action。

根据 action 的 type 返回一个新的 state。

根据业务逻辑可以分成多个 reducer, 然后通过 combineReducers 将它们合并， state 树中有很多对象，每个 state 对象对应一个 reducer， state 对象的名字可以在合并时定义。如下：

```js
const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
});
```

**combineReducers**

最终是一个封装过的函数，其实也是一个 reducer，接收整个 state 和 一个 action，然后将整个 state 拆分发送给对应的 reducer 进行处理，所有的 reducer 会收到相同的 action，不过它们会根据 action 的 type 进行判断，有这个 type 就进行处理然后返回新的 state，没有就返回默认值，然后这些分散的 state 又会被整合在一起返回一个新的 state 树。

> React 的 state 和 redux 的 state 两者完全是没有关系的，只是名字一样。

**bindActionCreators**

也是一个工具函数，帮助我们方便的去使用 action.

分析一下整体的流程如下：

>先调用 store.dispatch 将 action 作为参数传入，同时用 getState 获取当前的状态树 state 并注册 subscribe 的 listener 监听 state 变化，再调用 combineReducers 并将获取的 state 和 action 传入。 combineReducers 会将传入的 state 和 action 传给所有 reducer，并根据 action 的 type 返回新的 state，触发 state 树的更新，我们调用 subscribe 监听到 state 发生变化后用 getState 获取新的 state 数据。

### React-Redux

如果只使用 redux，流程是这样的：

> component --> dispatch(action) --> reducer --> subscribe --> getState --> component

用了 `react-redux` 之后流程就是这样的：

> component --> actionCreator(data) --> reducer --> component

这样 store 的三大功能：`dispatch`，`subscribe`，`getState` 都不需要手动来写了。`react-redux` 帮我们做了这些，同时它提供了两个好基友 Provider 和 connect 。

**Provider**

Provider 是一个组件，它接受 store 作为 props，然后通过 context 往下传，这样 react 中任何组件都可以通过 context 获取 store。

**connect**

connect(mapStateToProps, mapDispatchToProps, mergeProps, options) 是一个函数，它接受四个参数并且再返回一个函数, `wrapWithConnect`，`wrapWithConnect` 接受一个组件作为参数 `wrapWithConnect(component)`，它内部定义一个新组件 Connect (容器组件) 并将传入的组件 (ui 组件) 作为 Connect 的子组件然后 return 出去。

完整的写法：

```js
// 高阶函数的形式
connect (mapStateToProps, mapDispatchToProps, mergeProps, options)(component)
```

mapStateToProps(state, [ownProps]):

mapDispatchToProps(dispatch, [ownProps]):

mergeProps(stateProps, dispatchProps, ownProps):

options:

### 1.React Redux 怎么处理多线程文档，管理多个请求并发的问题？

JS 是单线程的，但是可以做到请求并发，如果想要多个请求都返回时才处理，可以使用 Promise.all

#### 1.1.如何看待用 worker 的方式启动新线程(var worker = new Worker(js file path))？

在有密集计算，又不希望卡主线程的情况下，原来只能用 `setTimeout` 分片，现在可以用 worker 了，有实际使用场景下非常棒。

### 2.数据状态管理： DRY(Don't Repeat Yourself) 原则

- 1.能计算得到的状态就不要单独存储
- 2.组件尽量无状态，所需数据通过 props 获取

## immutable

**缺点**

- 1.API 风格易与原生对象搞混淆
- 2.用第三方组件的时候, 需要使用 `toJS()`、`fromJS()` 方法，在原生和 immutable 对象之间互相转换

**优势**

- 1.比较引用即深度比较，极大的方便了在 SCU(shouldComponentUpdate) 中进行性能优化
- 2.防止不小心直接改变一些按引用传递的数据结构造成的 bug
- 3.节省内存

## 集成第三方 JS 库的技术要点

- 1.使用 ref 获取原生 DOM 节点引用？
- 2.手动将组件状态更新到 DOM 节点？
- 3.组件销毁时移除原生节点 DOM 事件？
