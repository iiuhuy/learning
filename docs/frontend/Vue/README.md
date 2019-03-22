# Vue 相关

MVVM 与 MVC 框架的区别：

Model-View-ViewModel 的简写，有时候又称 [Model–view–binder](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)。

- 实现数据

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

```

#### 2.2.第一次页面加载会触发哪几个钩子？

```
第一次页面加载会触发： beforeCreate(创建前)、created(创建后)、beforeMount(载入前)、mounted(载入后) 这几个钩子。
```

#### 2.3.DOM 渲染在哪个生命周期就已经完成？

```
DOM 在 mounted 中就已经完成。
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
