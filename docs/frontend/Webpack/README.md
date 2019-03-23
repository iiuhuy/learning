# Webpack

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
# 通过 npx 运行
$ npx webpack -v
4.29.6
# 如何查看 Webpack 版本
$ npm info webpack
```


原生浏览器，很早之前是不支持 ES 模块语法的，即使从后来一些高版本的浏览器 [Modules](https://caniuse.com/#search=modules) 逐渐支持后，在性能上还是有影响的，因为浏览器必须在运行时执行。

所以很大程度上还是要依赖打包工具的。


## 概念

### 1.webpack？

Webpack is a module bundler. 即 Webpack 是一个模块打包工具。

### 2.webpack & webpack-cli 的关系？





## Webpack4.0
