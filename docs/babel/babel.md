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

改写了 `require` 命令，并为它添加了一个钩子（Hook）。使用的时候只需要引入文件就开源运行，但是不适合在正式环境中使用。

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

## babel-runtime
