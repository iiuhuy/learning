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
mkdir TypeScript && cd TypeScript && code .
```

**初始化 TypeScript 项目**

在 VSCode 里面，打开终端。

然后 s 输入 `yarn init` 一直按回车，完后会多一个 `packqge.json` 文件。

输入：

```bash
yarn add typescript@next ts-node

# 如果在国内可以换成
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

查看版本

```bash
$ tsc -v
Version 3.4.0-dev.20190330
```

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

> 参考： https://zhuanlan.zhihu.com/p/60231115

## [常见的类型](http://www.typescriptlang.org/docs/handbook/basic-types.html)

[参考官网](https://www.tslang.cn/docs/handbook/basic-types.html)，过了官网的教程直接实战就好了。

常用的语法：基础类型、变量声明、接口、类、函数、泛型、类型推断、高级类型。

在 JSDoc 中，使用 `/**@type**/`注释来标记类型, 基本类型有：

| 类型       | 布尔值  | 数字   | 字符串 | 数组  | 元组  | 枚举 | Any | Void | Null and Undefined | Never | Object |
| ---------- | ------- | ------ | ------ | ----- | ----- | ---- | --- | ---- | ------------------ | ----- | ------ |
| TypeScript | Boolean | Number | String | Array | Tuple | Enum | Any | Void | Null and Undefined | Never | Object |

### 布尔值(Boolean)

最基本的数据类型就是简单的 true/false 值，在 JavaScript 和 TypeScript 里叫做 `boolean`（其它语言中也一样）。

```ts
let isDone: boolean = false;
```

### 数字(Number)

和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015 中引入的二进制和八进制字面量。

```ts
let decLiteral: number = 20;
let hexLiteral: number = 0x14;
let binaryLiteral: number = 0b10100;
let octalLiteral: number = 0o24;
```

### 字符串(String)

JavaScript 程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 `string` 表示文本数据类型。 和 JavaScript 一样，可以使用双引号（`"`）或单引号（`'`）表示字符串。

```ts
let name: string = "bob";
name = "smith";
```

还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ `` ` ``），并且以 `${ expr }` 这种形式嵌入表达式

```ts
let name: string = `Yes`;
let age: number = 37;
let sentence: string = `Hello, my name is ${name}.


I'll be ${age + 1} yaer old next month.`;
```

这与下面定义 `sentence` 的方式效果相同：

```ts
let sentence: string =
  "Hello, my name is " +
  name +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";
```

### 数组(Array)

TypeScript 像 JavaScript 一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 `[]`，表示由此类型元素组成的一个数组：

```ts
let list: number[] = [1, 2, 3];
```

第二种方式是使用数组泛型，`Array<元素类型>`：

```ts
let list: Array<number> = [1, 2, 3]; // 小悬念： TS 怎么让数组支持不同类型
```

### 元组(Tuple)

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 `string` 和 `number` 类型的元组。

```ts
let x: [string, number];
x = ["hello", 10];
x = [10, "hello"]; // Error
```

当访问一个已知索引的元素，会得到正确的类型：

```ts
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' 不存在 'substr' 方法
```

当访问一个越界的元素，会使用联合类型替代：

```ts
x[3] = "world"; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
```

联合类型是高级主题，后面学习...

::: warning COMPATIBILITY NOTE
注意：自从 TyeScript 3.1 版本之后，访问越界元素会报错，我们不应该再使用该特性。
:::

### 枚举(Enum)

`enum` 类型是对 JavaScript 标准数据类型的一个补充。 像 C# 等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

```ts
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
```

和 C 语言很像，这就是静态类型吧....

默认情况下，从 `0` 开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 `1` 开始编号：

```ts
enum Color {
  Red = 1,
  Green,
  Blue
}
let c: Color = Color.Green;
```

### any

在需要的时候去用，不要滥用.

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 `any` 类型来标记这些变量：

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // 也可以是个 boolean
```

### void

没有任何返回值的函数，通常返回值就是 void。

```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```

声明一个 `void` 类型的变量没有什么大用，因为只能为它赋予 `undefined` 和 `null`：

```ts
let unusable: void = undefined;
```

### Null and Undefined

TypeScript 里，`undefined` 和 `null` 两者各自有自己的类型分别叫做 `undefined` 和 `null`。 和 `void` 相似，它们的本身的类型用处不是很大：

```ts
let u: undefined = undefined;
let n: null = null;
```

### Never

`never` 类型表示的是那些永不存在的值的类型。

例如，`never` 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never` 类型，当它们被永不为真的类型保护所约束时。

`never` 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 `never` 的子类型或可以赋值给`never` 类型（除了 `never` 本身之外）。 即使 `any` 也不可以赋值给 `never`。

```ts
// 返回 never 的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为 never
function fail() {
  return error("Something failed");
}

// 返回 never 的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
```

### Object

object 表示非原始类型，也就是除 `number`，`string`，`boolean`，`symbol`，`null` 或 `undefined` 之外的类型。

使用 object 类型，就可以更好的表示像 `Object.create` 这样的 API。例如：

```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

### 类型断言

有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 其一是 “尖括号” 语法：

```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

另一个为 `as` 语法：

```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在 TypeScript 里使用 JSX 时，只有 `as` 语法断言是被允许的。

## 变量声明
