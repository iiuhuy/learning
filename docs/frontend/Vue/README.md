# Vue 相关

1.Vue 双向绑定原理？

2.Vue 生命周期？

```
即 Vue 的 8 个生命周期阶段： 
beforeCreate(创建前) → created(创建后) 
→ beforeMount(载入前) → mounted(载入后) 
→ beforeUpdate(更新前) → Updated(更新后)
→ beforeDestroy(销毁前) → destroyed(销毁后)
```

2.1.Vue 生命周期的作用？

```

```

2.2.第一次页面加载会触发哪几个钩子？

```
第一次页面加载会触发： beforeCreate、created、beforeMount、mounted 这几个钩子。
```

2.3.DOM 渲染在哪个生命周期就已经完成？

```
DOM 在 mounted 中就已经完成。
```

3.Vue Router 中 query 和 param 的区别？

4.Vue 的 data 为什么只能是函数，而不能是对象呢？