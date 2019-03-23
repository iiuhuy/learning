# Vue 相关

## 对于 MVVM 模式的理解

Model-View-ViewModel 的简写，有时候又称 [Model–view–binder](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)。
特点：Model 层是数据层，它只关心数据本身，不关心数据如何操作和展示；View 是视图层，负责将数据模型转化为 UI 展现给用户；ViewModel 为视图提供引擎，用来处理业务逻辑。

- 实现数据

参考：

- [实现一个属于我们自己的简易 MVVM 库](https://zhuanlan.zhihu.com/p/27028242)
- [如何监听一个数组的变化](https://zhuanlan.zhihu.com/p/27166404)

### 1.Vue 双向绑定原理？

### 2.Vue 生命周期？

```
即 Vue 的 8 个生命周期阶段：
beforeCreate(创建前) → created(创建后)
→ beforeMount(载入前) → mounted(载入后)
→ beforeUpdate(更新前) → Updated(更新后)
→ beforeDestroy(销毁前) → destroyed(销毁后)
```

#### 2.1.Vue 生命周期的作用？

```
它的生命周期中有多个事件钩子，让我们在控制整个 Vue 实例的过程时更容易形成好的逻辑。
```

#### 2.2.第一次页面加载会触发哪几个钩子？

```
第一次页面加载会触发：
beforeCreate(创建前)、
created(创建后)、
beforeMount(载入前)、
mounted(载入后) 这几个钩子。
```

#### 2.3.DOM 渲染在哪个生命周期就已经完成？

```
DOM 在 mounted 中就已经完成。
```

#### 2.4.简单描述每个周期具体适合哪些场景？

```
beforecreate : 可以在这加个 loading 事件;

```
### 3.说说 Vue 和 Angular、ReactJS 的相同点和不同点？

React 的相同点：

```
都使用了 Virtual DOM；
提供了响应式和组件化的视图组件；
将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。
```

React 不同点(区别)：

```
# 组件的响应式渲染
```

### 4.Vue 的 data 为什么只能是函数，而不能是对象呢？

### 5.Vue Router 中 query 和 param 的区别？

### 6.`v-if` 和 `v-show` 指令有什么区别？

`v-show` 对应的值无论是 true 还是 false，对应的 HTML 元素都会存在于浏览器的文档中；
`v-if` 如果是 false 的话，直接就不在文档中了。

### 7.父、子组件如何通信？

### 8.非父子层级的组件如何通信？

### 9.什么是动态组件？ 他的作用是什么？

### 10.什么时候适合用 methods？

### 11.什么时候适合用 computed？

### 12.什么时候适合用 watch？

### 13.如何自定义组件的指令，内置组件？

### 14.Vue 是如何通过使用 webpack 进行测试和生产环境进行一个构建处理的？

### 15.Vue 是如何获取到指令的 expression 去做这么一个解析？

> 引用自知乎： (如果只说正则处理那就太不负责了，应该听到的是：解析具体 expression 的处理，比如 test.xxx.a ["asa"]test1 [idx]] 的一个处理)

解析的地址给两个：

- [parseText](https://github.com/vuejs/vue/blob/dev/dist/vue.js#L7948)
- [parseModel](https://github.com/vuejs/vue/blob/dev/dist/vue.js#L5888)
