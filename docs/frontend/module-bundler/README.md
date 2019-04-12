# 打包工具

## Webpack

[安装 Webpack](http://webpack.html.cn/guides/installation.html)，模块化的文档可以看看官方的[英文文档](https://webpack.js.org/concepts/modules)。

安装稳定版本的 Node.js,和稳定版本的 Webpack 就行了。

`npm init`，项目初始化后，安装 Webpack。

全局安装(不推荐)。因为如果安装了 webpack4， 那么你 Webpack3 项目运行起来就有问题，

```bash
$ npm install webpack webpack-cli -g
+ webpack-cli@3.3.0
+ webpack@4.29.6
added 530 packages from 217 contributors in 17.591s
```

所以卸载掉，使用局部安装的方式(即在项目文件目录内)。

```bash
$ npm uninstall webpack webpack-cli -g
+ webpack-cli@3.3.0
+ webpack@4.29.6
added 388 packages from 217 contributors and audited 5229 packages in 16.718s
found 0 vulnerabilities
```

局部安装(推荐)，可以在不同的项目中使用不同 Webpack 版本号。

```bash
$ npm install webpack webpack-cli -D
# 通过 npx 运行, 局部安装直接使用 webpack 是找不到的
$ npx webpack -v
4.29.6
# 如何查看 Webpack 版本
$ npm info webpack
```

原生浏览器，很早之前是不支持 ES 模块语法的，即使从后来一些高版本的浏览器 [Modules](https://caniuse.com/#search=modules) 逐渐支持后，在性能上还是有影响的，因为浏览器必须在运行时执行。

所以很大程度上还是要依赖打包工具的。

### 概念

#### 1.webpack？

Webpack is a module bundler. 即 Webpack 是一个模块打包工具。

#### 2.webpack & webpack-cli 的关系？

webpack 打包的几种方式？

- `webpack index.js`
- `npx webpack index.js`
- `npm run bundle -> webpack(package.json->scripts)`

webpack-cli 的作用就是可以让我们在命令行中去使用 `webpack` 这个命令。如果没有安装 `webpack-cli` 那么 `npx webpack` 会报错。

#### 3.如果想在项目中编写 Webpack 的配置文件，如何做？

在项目目录下写一个 `webpack.config.js` 文件，这是默认的配置文件名字。

如果自己写了一个，例如 `webpackconf.js` 这样的名字，那么在打包的需要指定以该文件打包：

```bash
$ npx webpack --config webpackconf.js
```

#### 4.如何用 npm scripts 简化代码？

即在 `package.json` 文件中设置 `scripts`：

```bash
"scripts": {
  "bundle": "webpack"
},
```

#### 5.mode 警告？

这个跟在 `webpack.config.js` 里面设置 mode 的值有关(默认是 mode:production)。

mode 设置

- production，文件会被压缩；
- development，文件不会被压缩。

```bash
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
```

设置了之后就不会报这个警告了。

#### 6.Loader 是什么？

loader 的执行顺序：从下至上、从右到左。

> https://webpack.js.org/concepts/loaders

file-loader

> 可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存。
> 此外，这意味着 你可以就近管理图片文件，可以使用相对路径而不用担心部署时 URL 的问题。使用正确的配置，webpack 将会在打包输出中自动重写文件路径为正确的 URL。

例如 [file-loader](https://webpack.js.org/loaders/file-loader/) 在打包图片的时候，就可以使用该 loader。

url-loader

> 允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 file-loader 处理。

[url-loader](https://webpack.js.org/loaders/url-loader/), 也可以打包图片，但是会以 bas64 的形式打包出来，如果图片几 kb 还好，如果很大的图片，那么打包出来的 js 文件也会很大，这样的话加载就会很慢。

但是可以做一个限制 `limit`，如果图片超过多少 kb 就不打包到 js 文件，直接存放到 images 目录下。

CSS 样式 loader

CSS, 需要使用两个 loader 来打包分别是 [style-loader](https://webpack.js.org/loaders/style-loader)、[css-loader](https://webpack.js.org/loaders/css-loader)，安装这两个 loader，配置 webpack.config.js。

这两个 loader 的作用是什么呢？

- css-loader，会分析 CSS 文件之间的关系，将所有相关的 css 文件合并成一段 CSS；
- style-loader，在得到 css-loader 生成的 css 后，会将这段内容挂载到 header 部分。你会在 header-style 里面看到这段内容。

预处理样式的打包-[sass-loader](https://webpack.js.org/loaders/sass-loader)

sass-loader, 使用 `npm install sass-loader node-sass --save-dev`, 和上面的 css-loader 结合使用一样的。

[postcss-loader](https://webpack.js.org/loaders/postcss-loader)

那么如果这个时候使用到了 transform，CSS3 的特性，对于浏览器需要加 -webkit 前缀。可以使用 `postcss-loader`。

使用方法需要添加 `postcss.config.js`, 添加配置文件，需要用到 `autoprefixer` 插件，安装这个插件 `npm install autoprefixer -D`, 配置文件如下：

```js
module.exports = {
  plugins: [require("autoprefixer")]
};
```

#### 7.`webpack-dev-server`是怎么跑起来的？

#### 8.抽取公共文件是怎么配置的？

多页面抽取公共文件的配置方法： 

在 optimization -> cacheGroup -> common 下进行配置

#### 9.如何处理安全问题？

这个是自己在 sideProj 中出现的, 如下，然后发现是 `webpack-dev-server` 导致的。

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190409165254.png"/>

同时在 [uber/deck.gl](https://github.com/uber/deck.gl/issues/2558)，也看大这个 issues。

#### 10.import {Button} from 'antd', 打包的时候只打包 button，分模块加载是如何做到的？

#### 11.使用 import 时，webpack 对 node_modules 里的依赖会做什么？

#### 12.Webpack 生命周期？

#### 13.常用的 plugins？

#### 14.一般怎么组织 CSS？

CSS webpack

#### 15.如何去除 URL 中的 `#` 号？

#### 16.和 gulp 的区别？

#### 17.如何实现异步加载？

#### 18.如何实现分模块打包(多个入口)？

#### 20.打包时的 Hash 码是如何生成的？

##### 20.1.Hash 码存在相同的情况如何避免？

#### 21.

---

### Webpack4.0

## gulp

## [rollup](https://github.com/rollup/rollup)

通常来说，打包 JavaScript 工具、库，推荐使用 rollup，打包 web 应用，推荐使用 webpack,实际上很多前端流行的库都是使用 rollup 打包的，比如 React、Vue、Moment。

rollup.js 有两个重要的特性，其中一个就是它使用 ES6 的模块标准，这意味着可以直接使用 import 和 export 而不需要引入 babel（当然，在现在的项目中，babel 可以说是必用的工具了）。

- Tree Shaking： 自动移除未使用的代码，输出更小的文件(这个特性是基于 ES6 静态分析，只有 export 而没有 import 的变量不会被打包到最终代码中)；
- Scope Hoisting：所有模块构建在一个函数内，执行效率更高；
- Config 文件支持通过 ESM 模块格式书写；

### 快速上手

就像其他前端工具一样，我们可以通过 npm 全局安装 rollup，然后在命令行中使用它。

```bash
# 全局安装
npm install -g rollup

# 局部安装
npm install --save-dev rollup
# 如果使用局部安装可以使用 npx rollup -v 查看版本号
```

安装完成后，就可以使用 `rollup` 来打包了。

新建一个名为 `rollup-demo` 的目录，进入该目录并且初始化

```bash
cd rollup-demo

npm init
# npm 会让你输入一些信息，直接回车。  或者 npm init -y
```

### 插件

rollup 只提供打包的核心功能，如果你还想使用 babel 编译代码、压缩代码等功能，可以使用 rollup 社区提供的丰富插件，参考 [Awesome Rollup](https://github.com/rollup/awesome)。

例如可以使用 rollup 的压缩插件 [rollup-plugin-uglify](https://github.com/TrySound/rollup-plugin-uglify) 来压缩代码。

**参考**

- [Building and publishing a module with TypeScript and Rollup.js](https://hackernoon.com/building-and-publishing-a-module-with-typescript-and-rollup-js-faa778c85396)

## 问题总结

### 1.webpack 和其他自动化构建工具（gulp、grunt、rollup）有哪些区别？

### 2.模块化解决了前端的哪些痛点？

### 3.webpack 的 loader 和 plugin 区别，举几个常用的 loader 和 plugin 并说出作用?

### 4.webpack 打包的过程?

```
读取文件，分析模块依赖;
对模块进行解析执行(深度遍历);
针对不同的模块使用不同的 loader;
编译模块，生成抽象语法树(AST);
遍历 AST，输出 JS。
```

### 5.webpack 打包之后生成哪些文件？

### 6.webpack 打包出来的文件体积过大怎么办？

### 7.webpack 热部署的原理？

### 8.webpack 打包速度过慢怎么办？

### 9.如何评价 Webpack 2 新引入的 Tree-shaking 代码优化技术？

知乎：https://www.zhihu.com/question/41922432