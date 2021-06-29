# TypeScript

## 简单类型

PS：

- readonly 用于属性上面的；
- const 用于变量上面的。

## 复杂类型

## 接口 - Interface

在 TS 中主要功能：

- 对对象的形状（shape）进行描述；
- 对类 （class）进行抽象，具体自定义某些功能；
- Duck Typing（鸭子类型）。

## 类 - Class

- 类（Class）：定义了一切事物的抽象特点；
- 对象（Object）：类的实例；
- 面向对象（OOP）：三大特性，封装、继承、多态。

修饰符：

- public：
- protected：
- readonly：

## 泛型 - Generics

泛型是怎么出现的？它要解决什么样的问题？

> https://www.info.ucl.ac.be/~pvr/paradigmsDIAGRAMeng108.pdf

- 类型别名 & 类型断言

#### 类型断言（Type Assertion）

可以用来手动指定一个值的类型。

语法：

```ts
value as type;

// 或者

<type>value;
```

在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 `value as type`。比如 `<Foo>` 的语法在 tsx 中表示的是一个 ReactNode，在 ts 中除了表示类型断言之外，也可能是表示一个泛型。

#### 类型断言的用途

1.将一个联合类型断言为其中一个类型：

比如当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法：

```ts
interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

function getName(animal: Cat | Fish) {
  return animal.name;
}
```

2.非空断言

首先非空断言有什么用？

比如：

```ts
let user_info: string = localStorage.getItem("user_info");
```

TypeScript 编译器会提示一下错误信息：

```
let user_info: string
Type 'string | null' is not assignable to type 'string'.
Type 'null' is not assignable to type 'string'. ts(2322)
```

解决的办法可以用条件判断一下：

```ts
const data = localStorage.getItem("user_info");
if (data !== null && data.length > 0) {
  const user_info: string = data;
}
```

使用更简单的方式，TypeScript 2.0 提供的非空断言操作符：

```ts
const user_info: string = localStorage.getItem("user_info")!;
const { access_token } = JSON.parse(user_info);
```

## 声明文件
