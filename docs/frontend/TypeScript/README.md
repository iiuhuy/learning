# [TypeScript](https://github.com/Microsoft/TypeScript)

[TypeScript 中文官网](https://www.tslang.cn/)

## 前置知识

- 会写 node 脚本，熟悉 `npm/yarn` 等周边工具链；
- 知道 JavaScript，包括不限于 Promise/async function/arrow function/module/Symbol/Class/dynamic import；
- 基本的 Linux(linux/macOS) 命令行操作；
- 自己喜欢的 IDE 或者 文本编辑器， vscode。

### 环境搭建

一般都是在自己电脑新建一个目录 `TypeScript`, 执行

```bash
mkdir tTypeScript && cd TypeScript && code .
```

**初始化 TypeScript 项目**

在 VSCode 里面，打开终端。

然后一直按回车，完后会多一个 `packqge.json` 文件。

输入：

```bash
yarn add typescript@next ts-node

# 如果在国内
npx tyarn add typescript@next ts-node
```

然后会多出 `node_modules` 目录和 `yarn.lock` 文件。

- `node_modules`, 项目的依赖，
- `yarn-lock`, 准确存储 `node_modules` 下每个安装的依赖是哪个版本。

再输入:

```bash
$(yarn bin tsc) --init
message TS6071: Successfully created a tsconfig.json file.

# 或者输入
node_modules/.bin/tsc --init
```

这个时候就会多了一个 `tsconfig.json` 文件。里面有很多选项，介绍下最重要的选项，`"strict": true`，一定要开，否则就会是 JavaScript 了。

**TypeScript 的 repl 和 脚本**

输入:

```bash
$(yarn bin ts-node)
```

就进入了 ts-node 的 repl(Read-Eval-Print Loop)，体验和 node 是类似的。通过 `Ctrl+D` 退出。

输入:

```bash
code index.ts
```

开始编辑第一个 TypeScript 脚本。

```ts
console.log("Hello TypeScript!!!");
```

> 注意一下： 当把鼠标放到变量或者其他值的时候，会显示对应的类型。

保存后，在终端输入 `$(yarn bin ts-node) index.ts`,就能得到脚本里面打印出来的东西。

最基本最简单的环境就这么搭建完成了。

> 参考： 