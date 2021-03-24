# 关于 react-thunk

知道 redux 的原理之后，写个 thunk 就是非常简单的事情。所需要了解的内容：中间件、异步操作。

因为 [react-thunk](https://github.com/reduxjs/redux-thunk/blob/master/src/index.js) 的源码一共是 14 行代码。

简单翻译下这段代码的逻辑：

- 如果 action 是个函数，就调用这个函数；
- 如果 action 不是函数，就传给下一个中间件。

```js
// 简化一下
const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};
export default thunk;
```

如果没有 redux-thunk 怎么实现异步 action？

- 一种先创建请求数据的 action，然后再创建一个更新数据的 action；
- 另一种是直接发请求，得到数据之后创建更新数据的 action。

```js
const fetchUserInfo = () => {
  setTimeout(() => {
    store.dispatch({
      type: "updateUserInfo",
      payload: [{ id: 1 }, { id: 2 }],
    });
  }, 5000);
};

const reducer = (statu = init, { type, payload }) => {
  if (type === "function") {
    console.log(123);
    fetchUserInfo();
    return { ...state, loading: "loading" };
  } else if (type === "updateUserInfo") {
    return { ...state, loading: "ready", user: payload };
  }
};
```

有了 react-thunk，action 就可以是函数，它仅仅是让 dispatch 多支持了一种类型，即函数类型：

```js
const action = function (dispatch) {
  return fetchUserInfo().then(
    (user) => dispatch({ type: "updateUserInfo", payload: user }),
    (err) => dispatch({ type: "updateUserInfoError" })
  );
};
```

这个 action 会被调用，在后面某个时刻创建 updateUserInfo action，所以可以称它为异步 action（其实就是函数）。

参考：

- [how-to-dispatch-a-redux-action-with-a-timeout](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
- [Dan Abramov 的回答](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
