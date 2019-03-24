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

例如 [file-loader](https://webpack.js.org/loaders/file-loader/) 在打包图片的时候，就可以使用该 loader。

url-loader

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
  plugins: [
    require('autoprefixer')
  ]
}
```

### Webpack4.0
