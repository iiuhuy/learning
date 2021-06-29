## ES5,ES6,ES7/ES8 特性和支持

最近为 mo/lang 增加了 es6 新特性的 shim（What is a Polyfill?, Shim vs Polyfill，Extend the Web Forward），跟之前的一些 shim 库相比更简单清晰实用，为了方便说明新特性的分类和支持，弄了下面这个文档（推荐看更清晰的 gist 版）：

# ECMAScript Features, Support and Shims

## ES7 / ES8

- `Object.observe`
  - 原生支持: chrome，node-harmony
  - 替代：NervJS, WatchJS, Polymer/observe-js
- Typed Object / binary data
- Parallel API / River Trail
- Concurrency and Distribution / Vat
- Event streams?
- Completing classes?
- SES(SecureEcmaScript)?

## ES6

### 重大进步，无替代，无法 shim:

- Generator (`yield`)
  - 原生支持: firefox, chrome-experimental, node-harmony
  - 编译器支持：traceur
- Iterator + `for..of`
  - 原生支持: firefox
  - 编译器支持：traceur
- `Proxy`
  - 原生支持: firefox
- `Reflect`
- Proper Tail Calls

### 重大进步，可部分替代，可部分 shim:

- `Symbol`
  - 原生支持: chrome-experimental, node-harmony
- `Map` + `Set` + `WeakMap` + `WeakSet`
  - 原生支持: ie11/firefox（不支持 WeakSet）, chrome（不支持 Map、Set）, node-harmony
  - require('mo/lang/es6') / require('mo/lang/es6-collection')支持:
    - `Map#get` / `Map#set` / `Map#delete` / `Map#clear` / `Map#has` / `Map#size` / `Map#forEach`
    - `WeakMap#get` / `WeakMap#set` / `WeakMap#delete` / `WeakMap#clear` / `WeakMap#has`
    - `Set#add` / `Set#delete` / `Set#clear` / `Set#has` / `Set#size` / `Set#forEach`
    - `WeakSet#add` / `WeakSet#delete` / `WeakSet#clear` / `WeakSet#has`
  - 弱引用/垃圾回收特性无法 shim
  - `#entries` / `#keys` / `#values` 需要 Iterator，无法 shim
  - 其他 shim：paulmillr/es6-shim, WebReflection/es6-collections

### 很有用，可替代，可 shim:

- `Promise`
  - 原生支持: firefox, chrome
  - require('mo/lang/es6') / require('mo/lang/es6-promise')支持
  - 其他 shim：paulmillr/es6-shim, jakearchibald/es6-promise, getify/native-promise-only
  - 替代：EventMaster, Q, when, RSVP
- Array + Number + String + Object APIs
  - 原生支持: firefox（不支持 Object.assign）, chrome-experimental（不支持 Array.from、Array.of、fromCodePoint）
  - require('mo/lang/es6') / require('mo/lang/es6-utils')支持:
    - `Array#find` / `Array#findIndex` / `Array#fill` / `Array#copyWithin`
    - `Array.of` / `Array.from`
    - `String#startsWith` / `String#endsWith` / `String#contains` / `String#repeat`
    - `Number.MAX_SAFE_INTEGER` / `Number.MIN_SAFE_INTEGER` / `Number.EPSILON` / `Number.isFinite` / `Number.isInteger` / `Number.isSafeInteger` / `Number.isNaN`
    - `Object.is` / `Object.assign`
  - require('mo/lang/es6') / require('mo/lang/es6-utils')不支持:
    - `Object.setPrototypeOf`, `String.fromCodePoint`, `String#codePointAt`
  - 其他 shim：paulmillr/es6-shim, other standalone shims
- Math APIs
  - 原生支持: firefox, chrome-experimental
  - 使用场景有限，不包含在 require('mo/lang/es6-utils')里
  - paulmillr/es6-shim 支持

### 有用，可替代，无法 shim，原生支持进展慢:

- `module` + `Loader`
  - 编译器支持：traceur, es6-module-transpiler
  - 需要编译器的 shim 支持：es6-module-loader+SystemJS
  - 替代：AMD, CJS

### 有用，无替代，无法 shim

- `let`
  - 原生支持: ie11、firefox, chrome ,node-harmony
- `const`
  - 原生支持: ie11, firefox, chrome, safari, node

### 无新功能的语法糖，可替代，无法 shim:

- Arrows
- Comprehensions
- Destructuring
- Default + Rest + Spread Parameters
- Enhanced Object Literals(`__proto__`)
- Block-level function declaration
- Template Strings(`${name}`)
- `class`

## ES5 + ES5.1

原生支持：ie9+（9 不支持 strict mode）、firefox4+、safari5.1+、chrome7+（19 开始支持 strict mode）, node

### 很有用，可替代，可 shim:

- Array + String + Object + Date APIs
  - require('mo/lang/es5')支持:
    - `Array#forEach` / `Array#map` / `Array#filter` / `Array#reduce` / `Array#reduceRight` / `Array#some` / `Array#every` / `Array#indexOf` / `Array#lastIndexOf` / `Array.isArray`
    - `String#trim`
    - `Date.now`
    - `Object.keys` / `Object.getPrototypeOf`
  - require('mo/lang/es5')不支持:
    - `Number#toFixed` / `String#split` / `Date.parse` / `Date#toJSON` / `Date#toISOString`
  - 其他 shim：es5-shim
- `JSON`

### 很有用，可部分替代，可部分 shim:

- `Object.create` / `Function#bind`
  - require('mo/lang/es5')支持
  - 其他 shim：es5-shim

### 有用，无替代，无法 shim:

- `Object.defineProperty` / `Object.defineProperties` / `Object.seal` / `Object.freeze` / `Object.preventExtensions` / `Object.isSealed` / `Object.isFrozen` / `Object.isExtensible` / `Object.getOwnPropertyDescriptor` / `Object.getOwnPropertyNames`
- Getter / Setter

### 无新功能的语法，可替代，无法 shim:

- Strict mode
- `"foobar"[3]`
- `{ if: 1 }`
