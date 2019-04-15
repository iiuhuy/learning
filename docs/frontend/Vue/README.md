# Vue 相关

## 对于 [MVVM](https://zh.wikipedia.org/wiki/MVVM) 模式的理解

Model-View-ViewModel 的简写，有时候又称 [Model–view–binder](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)。
特点：Model 层是数据层，它只关心数据本身，不关心数据如何操作和展示；View 是视图层，负责将数据模型转化为 UI 展现给用户；ViewModel 为视图提供引擎，用来处理业务逻辑。

- 实现数据

参考：

- [实现一个属于我们自己的简易 MVVM 库](https://zhuanlan.zhihu.com/p/27028242)
- [如何监听一个数组的变化](https://zhuanlan.zhihu.com/p/27166404)

### 1.Vue 双向绑定原理(Vue2.x 和 Vue3.x 两者实现的优缺点)？

### 2.Vue 生命周期？

```
即 Vue 的 8 个生命周期阶段：
beforeCreate(创建前) → created(创建后)
→ beforeMount(载入前) → mounted(载入后)
→ beforeUpdate(更新前) → Updated(更新后)
→ beforeDestroy(销毁前) → destroyed(销毁后)
```

```js
var vm = new Vue({
  el: "#app",
  data: {
    message: "Vue的生命周期"
  },
  beforeCreate: function() {
    console.group("------beforeCreate创建前状态------");
    console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
    console.log("%c%s", "color:red", "message: " + this.message);
  },
  created: function() {
    console.group("------created创建完毕状态------");
    console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  beforeMount: function() {
    console.group("------beforeMount挂载前状态------");
    console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  mounted: function() {
    console.group("------mounted 挂载结束状态------");
    console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  beforeUpdate: function() {
    console.group("beforeUpdate 更新前状态===============》");
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
  },
  updated: function() {
    console.group("updated 更新完成状态===============》");
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
  },
  beforeDestroy: function() {
    console.group("beforeDestroy 销毁前状态===============》");
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
  },
  destroyed: function() {
    console.group("destroyed 销毁完成状态===============》");
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
  }
});
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

**beforeCreate、created** 之间，进行初始化事件，watch 数据，在 `created` 的时候数据已经和 `data` 进行绑定(即放在 `data` 中的属性当值发生改变的同时，视图也会改变)，还没有 `el` 选项。


#### 2.3.DOM 渲染在哪个生命周期就已经完成？

```
DOM 在 mounted 中就已经完成。
```

#### 2.4.简单描述每个周期具体适合哪些场景？

```
beforecreate : 可以在这加个 loading 事件;

```

#### 2.5.Vue-cli ?

基于 webpack 构建，并带有合理的默认配置；

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

因为在一个组件被多次引用的情况下，如果 data 的值是一个 Object 的话，那么由于 Object 是一个引用类型，所以即使是该组件被多次引用，而其实操作的是同一个对象，最终导致了引用该组件的所有位置都同步的显示了。

参考：

- 官方文档：[组件基础](https://cn.vuejs.org/v2/guide/components.html#data-%E5%BF%85%E9%A1%BB%E6%98%AF%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0) 和 [api-data](https://cn.vuejs.org/v2/api/#data);
- [Vue 组件为什么必须是函数？](https://zhuanlan.zhihu.com/p/30332205)

### 5.Vue Router 中 query 和 param 的区别？

### 6.`v-if` 和 `v-show` 指令有什么区别？

`v-show` 对应的值无论是 true 还是 false，对应的 HTML 元素都会存在于浏览器的文档中；
`v-if` 如果是 false 的话，直接就不在文档中了。

### 7.父、子组件如何通信？

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190327004741.png"/>

在 Vue 中，每个组件实例的作用域是孤立的,这也意味着不能（也不应该）在子组件的模板内直接饮用父组件的数据。

父组件通过 Props 向子组件传递数据，而子组件通过 Events 向父组件传递数据。

### 8.非父子层级的组件如何通信？

简单的应用场景下，可以使用一个空的 Vue 实例作为中央事件总线。

在复杂的情况下，可以考虑使用 Vue 官方提供的状态管理模式 ——Vuex 来进行管理。

### 9.什么是动态组件？ 他的作用是什么？

通过使用保留的 `<component>` 元素，动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并可以动态地切换。

除此之外，Vue 还提供了 keep-alve 指令。keep-alive 指令允许把切换出去的组件保留在内存中，并保留它的状态或避免重新渲染。

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

### 16.如何阻止 Vue 中的绑定事件不发生冒泡

可以使用 **事件修饰符** 来处理事件冒泡，如：`v-on:click.stop` 阻止事件冒泡或 `v-on:submit.prevent` 阻止默认事件。

### 17.Vue 的 nexttick 原理？

### 18.diff 算法?

### 19.Vue 处理静态资源？

从相对路径导入，引用静态资源时，该资源会被包含进入 Webpack 的依赖图中，在内部通过 `file-loader` 用版本哈希值和正确的公共基础路径来决定最终的文件路径，再用 `url-loader` 将小于 4kb 的资源内联，以减少 HTTP 请求的数量。可以设置 [chainWebpack](https://cli.vuejs.org/zh/config/#chainwebpack) 调整内联文件大小限制。

### 20.vue-keep-alive?

Vue 实现页面缓存：

```js
// keep-alive
<keep-alive>
  <router-view v-if="isLoginAndKeepAlive" class="site-main"/>
</keep-live>
// 如果只需要从某些页面过来的才缓存当前页面的数据，可以下面这样进行设置
beforeRouteEnter (to, from, next) {
  // 从详情页过来的话当前页被缓存，其它页面过来则不缓存
  to.meta.keepAlive = false
  if (from.path === '/statistics/detail') {
    to.meta.keepAlive = true
  }
  next()
}
```

`keep-alive` 有一点副作用，如数据变更的话，需要做相应的调整，参考[vue 中前进刷新、后退缓存用户浏览数据和浏览位置的实践](https://juejin.im/post/5b2ce07ce51d45588a7dbf76)。

## Vue CSS 命名规范

Vue 组件的 CSS 命名规范。

每个 Vue 组件的最外层容器采用 组件名+root 的方式命名，如:

```js
<template>
  <div class="paging-table-root">...</div>
</template>
```

这样做是为了更快速定位一个组件，而不用先通过 vue-devtool 找到组件名，然后再去项目里找。

其他元素的命名。

### 1.命名规则

`B-E-M` 书写格式，见[BEM-Introduction](http://getbem.com/introduction/)

`B`,代表 Block

每个模块都由多个 element 组成，应尽量保证每个组件只有一个 Block：

```js
<template>
  <div class="paging-root">
    <ul class="paging-list">
      <li class="paging-item">
        <a class="paging-btn">上一页</a>
      </li>
      ...
      <li class="paging-item">
        <a class="paging-link">5</a>
      </li>
      ...
      <li class="paging-item">
        <a class="paging-btn">下一页</a>
      </li>
    </ul>
  </div>
</template>
```

当一个 Block 实在无法满足使用的时候，再将该 Block 按结构划分为多个部分，这几个部分作为其它具体元素的 Block。

```js
<template>
  <div class="article-root">
    <div class="article-header">
      <ul class="header-list">
        <li class="header-item" />
      </ul>
    </div>
    ...
    <div class="article-main">
      <ul class="main-list">
        <li class="main-item" />
      </ul>
    </div>
  </div>
</template>
```

`E`，代表 Element

每个 element 都应该具有独立性，可以用在 Block 的任何地方，而不需要做额外的处理。

```js
<template>
  <div class="comment-root">
    ...
    <div class="comment-header">
      <p class="comment-txt">重要的是命名的思想，而不是完全照搬。</p>
    </div>
    ...
    <div class="comment-main">
      <p class="comment-txt">赞同！</p>
    </div>
  </div>
</template>
```

另外每一个 element 都可能存在不同的状态，比如选中状态，激活状态，以及大小颜色等。

```js
<template>
  <div class="login-root">
    ...
    <input class="login-input" type="text">
    <input class="login-input login-input-error" type="text">
    ...
  </div>
</template>
```

`M`,代表 Modifier

Modifier 是 Element 的修饰符，用来区分 Element 可能存在不同的状态。

在一些特殊情况下，通常是 UI 做的不够标准统一时候，单一的 Element 内外边距不能即满足独立可复用性，又满足 UI 样式。这时 Modifier 也可以用来表示元素的容器，比如：

```js
<template>
  <div class="login-root">
    ...
    <div class="login-form-wrap">
      <form class="login-form">...</form>
    </div>
  </div>
</template>
```

### 2.书写规则

每个组件的 `<style>` 标签都需要添加 `scoped` 属性：

```js
<style scoped>...</style>
```

选择器之间禁止嵌套，便于代码阅读和后期维护，以及避免权重所带来的影响：

```CSS
<!-- 推荐的写法 -->
<style scoped>
  .news-list {
  }
  .news-item {
  }
  .news-txt {
  }
</style>
```

```CSS
/* 不推荐的写法 */
<style scoped>
  .news-list {
  }
  .news-list .news-item {
  }
  .news-item .news-txt {
  }
</style>
```

css 样式书写时按照定位、盒模型、样式、功能的顺序，比如：

```CSS
<style scoped>
  .news-list {
    /* 定位 */
    position: absolute;
    left: 0;
    z-index: 10;

    /* 盒模型 */
    float: left;
    display: block;
    flex: 1;
    align-items: center;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;

    /* 样式 */
    background: #fff;
    color: #fff;
    font: italic bold 12px/20px arial,sans-serif;

    /* 功能 */
    transition: all 1s;
    transform: translate(10px, 10px);
    cursor: pointer;
  }
</style>
```

### 3.命名常用词汇

`Block` 与 `Element` 之间不需要进行层层嵌套，父级的 `Element` 也可以作为子级的 `Block`，这样能避免当元素嵌套较深时，class 需要写很长一串的问题。

常用块(Block)：

- 结构类：header、nav、subnav、menu、submenu、main、aside、footer；
- 内容类：summary、banner、article、login、register、form、news。

对于一个简单的组件，优先使用组件名作为 Block，不用把组件名全写出来，选其中一个典型单词就可以，例如：

```HTML
<div class="morning-news-root">
  <div class=news-header>
    <p class="news-title">早间新闻</p>
    <a class="news-btn" href="#">更多</a>
  </div>
  <ul class="news-list">
    <li class="news-item">特普朗退出TTP</li>
  </ul>
</div>
```

常用元素(Element)：

- 结构类：header、main、content、footer；
- 文本类：txt、link；
- 表单类：form、input、label；
- 表格类：table、column、row、cell；
- 列表类：list、item、filed；
- 按钮：button。

常用修饰符(Modifier)

- 状态类：primary、success、warning、error、active；
- 形状类：large、big、small；
- 样式类：fl、center、diddle、fr；
- 容器类：box，wrap。
