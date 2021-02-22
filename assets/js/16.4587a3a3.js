(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{182:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"ubuntu-install-mongodb"}},[s._v("Ubuntu Install mongoDB")]),s._v(" "),t("p",[s._v("其实网上教程已经很多了，自己写一遍是为了后面自己安装方便：")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.mongodb.org/dl/linux/x86_64",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载"),t("OutboundLink")],1)]),s._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190506232157.png"}}),s._v(" "),t("p",[s._v("选择自己对应的版本进行下载，虚拟机下 Linux 也是同理,下载下来后拖进虚拟机就行了。")]),s._v(" "),t("p",[s._v("基本操作：")]),s._v(" "),s._m(0),s._m(1),s._v(" "),s._m(2),s._m(3),s._v(" "),s._m(4),t("p",[s._v("保存退出后， source 一下")]),s._v(" "),s._m(5),t("p",[s._v("在 mongodb 目录下创建 conf 目录，并创建 mongodb.conf 配置文件")]),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8),t("p",[s._v("启动服务：")]),s._v(" "),s._m(9),t("p",[s._v("服务就启动了。")]),s._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190507001554.png"}}),s._v(" "),t("p",[s._v("停止服务:")]),s._v(" "),s._m(10),t("p",[s._v("关于远程访问本地，可能的原因：")]),s._v(" "),s._m(11)])},[function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf mongodb-linux-x86_64-ubuntu1804-latest.tgz\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mongodb-linux-x86_64-ubuntu1804-4.1.10-388-g30f602bb9c mongodb "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类似于重命名文件为 mongodb")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mongodb /usr/local/mongodb\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/mongodb/    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 mongodb")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[this._v("在 mongodb 目录下创建目录 "),n("code",[this._v("data/db")]),this._v(" ，以及 "),n("code",[this._v("log")]),this._v(" 目录:")])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/mongodb/    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 mongodb")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" data  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 data 目录")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" log   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 log 日志目录")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" data     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 data 目录")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" db    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 db 目录")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[this._v("系统 "),n("code",[this._v("profile")]),this._v(" 配置，配置环境，这是每装一个软件的必备步骤，在 "),n("code",[this._v("profile")]),this._v(" 文件最后面添加环境变量, 如果没有管理员全新啊，使用 sudo，如果文件是只读文件使用 "),n("code",[this._v("chmod")]),this._v(" 命令给加权限，配置完下面的文件后, 再修改回只读文件。")])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile  \n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("export")]),s._v(" MONGODB_HOME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mongodb\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("export")]),s._v(" PATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONGODB_HOME")]),s._v("/bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[this._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[this._v("source")]),this._v(" /etc/profile\n")])]),this._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[this._v("1")]),n("br")])])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/mongodb/    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 mongodb 目录")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" conf "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 conf 目录")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" mongodb.conf  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 mongodb.conf 配置文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[this._v("配置 "),n("code",[this._v("mongodb.conf")]),this._v("：")])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("dbpath "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /usr/local/mongodb/data/db  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据文件存放目录  ")]),s._v("\nlogpath "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /usr/local/mongodb/log/mongodb.log "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志文件存放目录  ")]),s._v("\nport "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 27017  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口  ")]),s._v("\nfork "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以守护程序的方式启用，即在后台运行  ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/mongodb/    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 mongodb")]),s._v("\n$ ./bin/mongod --config ./conf/mongodb.conf  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接 mongodb")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/mongodb/bin\n$ ./mongo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/mongodb/bin\n$ ./mongod -shutdown -dbpath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mongodb/data/db  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止mongodb")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("ul",[n("li",[this._v("防火墙阻止了 27017 端口")]),this._v(" "),n("li",[this._v("mongodb 的配置文件中 bind_ip 默认为 "),n("code",[this._v("127.0.0.1")]),this._v("，默认是只能链接本机的，可以将 bind_ip 设置为 0.0.0.0 表示接受任何 IP 的连接。")])])}],!1,null,null,null);n.default=e.exports}}]);