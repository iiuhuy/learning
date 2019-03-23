# Flask

使用 Python 作为后端语言， Flask 框架，view 层可以采用 Jinja2 模板引擎。

如果后台选型完成，那么后端不变的话，依然是 Python+Flask，而 view 层是可以变的，将 View 层完全抽离出去，由前端负责。

前端可以采用 Vue 全家桶、React 全家桶等等，一般小公司不会如果使用 Node 作为中间层，如果踩坑了，填坑肯定是一件痛苦的事情。

## 目录结构

```bash
proj
  | -- backend    // backend 存放后端文件，作为后端的根目录
  | -- dist       // dist 文件夹最终存放前端打包的静态文件，即 npm run build 生成的代码
  | -- frontend   // frontend 前端开发的代码了
```

### 前端环境

Vue 全家桶！

React 全家桶！

### 后端环境

Python 不像 Node.js, 通过 NPM 安装包时，全局和局部只需要一个参数就能区分， 安装在当前项目环境的包，不会影响其他的项目环境。而 Python 不行啊，所以就用 `virtualenv`，来把每个项目封装在虚拟环境中，这样就避免互相影响。

