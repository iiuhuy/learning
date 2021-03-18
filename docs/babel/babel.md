# Babel

> 关于 Babel 介绍：https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md

Babel 运行方式：

- 解析：将字符串代码解析为 AST 抽象语法树；
- 转换：对抽象 AST 语法树进行转换操作；
- 再生：根据变换后的 AST 生成代码字符串。

## Babel 核心模块

- [babel-parser](https://github.com/babel/babel/tree/main/packages/babel-parser)
- [babel-core](https://github.com/babel/babel/blob/main/packages/babel-core)
- [babel-generator](https://github.com/babel/babel/tree/main/packages/babel-generator)
- [babel-types](https://github.com/babel/babel/tree/main/packages/babel-types)
- [babel-register](https://github.com/babel/babel/tree/main/packages/babel-register)
- [babel-template](https://github.com/babel/babel/tree/main/packages/babel-template)
- [babel-helpers](https://github.com/babel/babel/tree/main/packages/babel-helpers)
- [babel-code-frame](https://github.com/babel/babel/tree/main/packages/babel-code-frame)

> by Babel's core packages：https://babeljs.io/docs/en/core-packages

`babel/core` 做什么用？

- 加载处理配置（Config）；
- 加载插件；
- 调用 Parser 进行语法解析，生成 AST；
- 调用 Traverser 遍历 AST，并使用 `访问者模式` 应用插件对 AST 进行转换；
- 生成代码，包括 SourceMap 转换和源代码生成。

`babel-register` 做什么用？

改写了 `require` 命令，并为它添加了一个钩子（Hook）。使用的时候只需要引入文件就可以运行，但是**不适合在正式环境中使用**。

例如创建 `register.js` 文件，添加如下代码：

```js
require("babel-register");
require("./index.js");
```

就可以使用 `register.js` 来代替 `node index.js` 运行。

```bash
$ node register.js
```

[babel-cli](https://github.com/babel/babel/tree/main/packages/babel-cli)

Babel 的 [CLI](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md#babel-cli) 是一种在命令行下使用 Babel 编译文件的简单方法。

---

Babel 生成的 AST 是根据 [Babel AST format](https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md)，基于 [estree](https://github.com/estree/estree) 规范。这个规范定义了一个完整的 ecmascript 语法树，jsx、flow、typescript 在 estree 的规范下做了一些特有的扩充。

关于 AST 树的详细定义 Babel 有文档

- https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md

## babel-polyfill

> https://babeljs.io/docs/en/babel-polyfill

babel-polyfill 这里肯定离不开一个开源库 [core-js](https://github.com/zloirock/core-js)，它提供了 ES5、ES6 的 polyfill，包括：

- [Promise](https://github.com/zloirock/core-js#ecmascript-promise)
- [Symbol](https://github.com/zloirock/core-js#ecmascript-symbol)
- [Collections](https://github.com/zloirock/core-js#ecmascript-collections)
- [ES proposals](https://github.com/zloirock/core-js#ecmascript-proposals)
- [等等......](https://github.com/zloirock/core-js#index) 全局对象，以及一些定义在全局对象上的方法（如：Object.assign）都不会转码。

`babel-polyfill` 的缺点：

- 但是由于 babel-polyfill 打包出来的体积太大，因为它把所有方法都加到了原型链上。这样就会造成一种浪费，不过可以通过单独使用 [core-js 的某个类库来解决](https://github.com/zloirock/core-js/blob/master/docs/zh_CN/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#%E5%8C%85%E5%85%A5%E5%8F%A3%E5%92%8C%E6%A8%A1%E5%9D%97%E5%90%8D%E5%AD%97)；
- `babel-polyfill` 会造成全局污染，给一些类的原型链上做了修改，所以会倾向于使用 `babel-plugin-transform-runtime`

## babel-runtime

babel-runtime 是由 Babel 提供的 polyfill 库，它本身就是由 core-js 与 regenerator-runtime 库组成，除了做简单的合并与映射外，并没有做任何额外的加工。

#### babel-plugin-transform-runtime

▲

为了解决每个定义方法的文件，重复插入了一段相同的代码，造成的浪费。

## 一些问题

Q：Babel 只编译语法不编译 API？
A：Babel 是处于构建时，转义后的结果在默认情况下不包括 ES6 对运行时的扩展。[内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)、内置类型的原型扩展（例如 ES6 对 Array、Object）等都不包括在内，如果使用了 `babel-runtime`、`babel-plugin-transform-runtime`、`babel-polyfill` 就间接引入了 core-js 标准库。

Q：[regenerator 运行时库](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime)？
A：用来实现 ES6/ES7 中 generators、yield、async 及 await 等相关的 polyfills。在 [babel-runtime](https://github.com/babel/babel/blob/main/packages/babel-runtime-corejs3/regenerator/index.js) 中被引用。

Q：Babel v6 和 Babel v7 的区别？
Q：Plugin 插件是如何工作的？
Q：整个体系执行顺序的怎样的？

Plugin（从前向后执行） > Preset（从后向前执行），Preset 的逆向顺序主要是为了保证向后兼容。
