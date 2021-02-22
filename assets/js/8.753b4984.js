(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{174:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"flask"}},[t._v("Flask")]),t._v(" "),n("p",[t._v("使用 Python 作为后端语言， Flask 框架，view 层可以采用 Jinja2 模板引擎。")]),t._v(" "),n("p",[t._v("如果后台选型完成，那么后端不变的话，依然是 Python+Flask，而 view 层是可以变的，将 View 层完全抽离出去，由前端负责。")]),t._v(" "),n("p",[t._v("前端可以采用 Vue 全家桶、React 全家桶等等，一般小公司不会如果使用 Node 作为中间层，如果踩坑了，填坑肯定是一件痛苦的事情。")]),t._v(" "),n("h2",{attrs:{id:"目录结构"}},[t._v("目录结构")]),t._v(" "),t._m(0),n("h3",{attrs:{id:"前端环境"}},[t._v("前端环境")]),t._v(" "),n("p",[t._v("Vue 全家桶！(看官网)")]),t._v(" "),n("p",[t._v("React 全家桶！")]),t._v(" "),n("h3",{attrs:{id:"后端环境"}},[t._v("后端环境")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("virtualenv 虚拟环境的搭建可以参考，"),n("a",{attrs:{href:"https://alvinmi.github.io/Developer-notes/backend/Python/#%E6%8E%A8%E8%8D%90%E4%BD%BF%E7%94%A8-anaconda-%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 基础中的开头环境搭建部分"),n("OutboundLink")],1),t._v("。")])])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("proj\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" -- backend    // backend 存放后端文件，作为后端的根目录\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" -- dist       // dist 文件夹最终存放前端打包的静态文件，即 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build 生成的代码\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" -- frontend   // frontend 前端开发的代码了\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Python 不像 Node.js, 通过 NPM 安装包时，全局和局部只需要一个参数就能区分， 安装在当前项目环境的包，不会影响其他的项目环境。而 Python 不行啊，所以就用 "),e("code",[this._v("virtualenv")]),this._v("，来把每个项目封装在虚拟环境中，这样就避免互相影响。")])}],!1,null,null,null);e.default=a.exports}}]);