(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{192:function(_,v,l){"use strict";l.r(v);var i=l(0),t=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("div",{staticClass:"content"},[l("h1",{attrs:{id:"常用网络"}},[_._v("常用网络")]),_._v(" "),l("h3",{attrs:{id:"_1-get-post-之间的差异"}},[_._v("1.GET/POST 之间的差异?")]),_._v(" "),l("h3",{attrs:{id:"_2-http-强缓存、协商缓存"}},[_._v("2.HTTP 强缓存、协商缓存?")]),_._v(" "),l("h2",{attrs:{id:"应用场景"}},[_._v("应用场景")]),_._v(" "),l("p",[_._v("1.问题：使用 websocket，当产品 A 在 (11 层) 连接产品 B,【websocket 服务器】(5 层)的时候，过 15 分钟左右就会断开，使用内网连接没有问题。不知道该如何排查？")]),_._v(" "),l("h3",{attrs:{id:"http-协议状态码"}},[_._v("HTTP 协议状态码")]),_._v(" "),l("p",[_._v("HTTP 状态码负责表示客户端 HTTP 请求的返回结果、标记服务器端的处理是否正常、通知出现的错误等工作记录。")]),_._v(" "),l("h4",{attrs:{id:"_1xx-临时响应-informational-信息型状态码-接收的请求正在处理"}},[_._v("1xx(临时响应)Informational 信息型状态码 接收的请求正在处理")]),_._v(" "),l("p",[_._v("表示临时响应并需要请求者继续执行操作的状态码。")]),_._v(" "),l("ul",[l("li",[_._v("100（继续） 请求者应当继续提出请求。服务器返回此代码表示已收到请求的第一部分，正在等待其余部分。")]),_._v(" "),l("li",[_._v("101（切换协议）请求者已要求服务器切换协议，服务器已确认并准备切换。")])]),_._v(" "),l("h4",{attrs:{id:"_2xx-成功-success-成功状态码-请求正常处理完毕"}},[_._v("2xx(成功) Success 成功状态码 请求正常处理完毕")]),_._v(" "),l("p",[_._v("表示成功处理了请求的状态码。")]),_._v(" "),l("ul",[l("li",[_._v("200(成功)OK 。服务器已成功处理了请求。通常，这表示服务器提供了请求的网页。如果是对您的 robots.txt 文件显示此状态码，则表示 Googlebot 已成功检索到该文件。")]),_._v(" "),l("li",[_._v("201(已创建)。请求成功并且服务器创建了新的资源。")]),_._v(" "),l("li",[_._v("202(已接受)。服务器已接受请求，但尚未处理。")]),_._v(" "),l("li",[_._v("203(非授权信息)。服务器已成功处理了请求，但返回的信息可能来自另一来源。")]),_._v(" "),l("li",[_._v("204(无内容)No Content。服务器成功处理了请求，但没有返回任何内容。")]),_._v(" "),l("li",[_._v("205(重置内容)。服务器成功处理了请求，但没有返回任何内容。与 204 响应不同，此响应要求请求者重置文档视图（例如，清除表单内容以输入新内容）。")]),_._v(" "),l("li",[_._v("206(部分内容)Partial Content。服务器成功处理了部分 GET 请求。 响应报文中包含由 Content-Range 指定范围的实体内容")])]),_._v(" "),l("h4",{attrs:{id:"_3xx-重定向-redirection-重定向状态码-需要进行附加操作以完成请求"}},[_._v("3xx(重定向) Redirection 重定向状态码 需要进行附加操作以完成请求")]),_._v(" "),l("p",[_._v("要完成请求，需要进一步操作。通常，这些状态码用来重定向。Google 建议您在每次请求中使用重定向不要超过 5 次。您可以使用网站管理员工具查看一下 Googlebot 在抓取重定向网页时是否遇到问题。诊断下的网络抓取页列出了由于重定向错误导致 Googlebot 无法抓取的网址。")]),_._v(" "),l("ul",[l("li",[_._v("300(多种选择)。针对请求，服务器可执行多种操作。服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择。")]),_._v(" "),l("li",[_._v("301(永久移动)Moved Permanently。请求的网页已永久移动到新位置。服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。您应使用此代码告诉 Googlebot 某个网页或网站已永久移动到新位置。")]),_._v(" "),l("li",[_._v("302(临时移动)。服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来响应以后的请求。此代码与响应 GET 和 HEAD 请求的 301 代码类似，会自动将请求者转到不同的位置，但您不应使用此代码来告诉 Googlebot 某个网页或网站已经移动，因为 Googlebot 会继续抓取原有位置并编制索引。")]),_._v(" "),l("li",[_._v("303(查看其他位置)See Other。请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码。对于除 HEAD 之外的所有请求，服务器会自动转到其他位置。")]),_._v(" "),l("li",[_._v("304(未修改)。自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。\n如果网页自请求者上次请求后再也没有更改过，您应将服务器配置为返回此响应（称为 If-Modified-Since HTTP 标头）。服务器可以告诉 Googlebot 自从上次抓取后网页没有变更，进而节省带宽和开销。")]),_._v(" "),l("li",[_._v("305(使用代理)。请求者只能使用代理访问请求的网页。如果服务器返回此响应，还表示请求者应使用代理。")]),_._v(" "),l("li",[_._v("307(临时重定向)Temporary Redirect。服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来响应以后的请求。此代码与响应 GET 和 HEAD 请求的 "),l("code",[_._v("<a href=answer.py?answer=>301</a>")]),_._v(" 代码类似，会自动将请求者转到不同的位置，但您不应使用此代码来告诉 Googlebot 某个页面或网站已经移动，因为 Googlebot 会继续抓取原有位置并编制索引。")])]),_._v(" "),l("h4",{attrs:{id:"_4xxx-请求错误-client-error-客户端错误状态码"}},[_._v("4xxx(请求错误)Client Error 客户端错误状态码")]),_._v(" "),l("p",[_._v("这些状态码表示请求可能出错，妨碍了服务器的处理。")]),_._v(" "),l("ul",[l("li",[_._v("400(错误请求)Bad Request。服务器不理解请求的语法。")]),_._v(" "),l("li",[_._v("401(未授权)Unauthorized。请求要求身份验证。对于登录后请求的网页，服务器可能返回此响应。")]),_._v(" "),l("li",[_._v("403(禁止)Forbidden。服务器拒绝请求。如果您在 Googlebot 尝试抓取您网站上的有效网页时看到此状态码（您可以在 Google 网站管理员工具诊断下的网络抓取页面上看到此信息），可能是您的服务器或主机拒绝了 Googlebot 访问。")]),_._v(" "),l("li",[_._v("404(未找到) Not Found。服务器找不到请求的网页。")]),_._v(" "),l("li",[_._v("405(方法禁用)。禁用请求中指定的方法。")]),_._v(" "),l("li",[_._v("406(不接受)。无法使用请求的内容特性响应请求的网页。")]),_._v(" "),l("li",[_._v("407(需要代理授权)。此状态码与 401（未授权）类似，但指定请求者应当授权使用代理。如果服务器返回此响应，还表示请求者应当使用代理。")]),_._v(" "),l("li",[_._v("408(请求超时)。服务器等候请求时发生超时。")]),_._v(" "),l("li",[_._v("409(冲突)。服务器在完成请求时发生冲突。服务器必须在响应中包含有关冲突的信息。服务器在响应与前一个请求相冲突的 PUT 请求时可能会返回此代码，以及两个请求的差异列表。")]),_._v(" "),l("li",[_._v("410(已删除)。如果请求的资源已永久删除，服务器就会返回此响应。该代码与 404（未找到）代码类似，但在资源以前存在而现在不存在的情况下，有时会用来替代 404 代码。如果资源已永久移动，您应使用 301 指定资源的新位置。")]),_._v(" "),l("li",[_._v("411(需要有效长度)。服务器不接受不含有效内容长度标头字段的请求。")]),_._v(" "),l("li",[_._v("412(未满足前提条件)。服务器未满足请求者在请求中设置的其中一个前提条件。")]),_._v(" "),l("li",[_._v("413(请求实体过大)。服务器无法处理请求，因为请求实体过大，超出服务器的处理能力。")]),_._v(" "),l("li",[_._v("414(请求的 URI 过长)。请求的 URI（通常为网址）过长，服务器无法处理。")]),_._v(" "),l("li",[_._v("415(不支持的媒体类型)。请求的格式不受请求页面的支持。")]),_._v(" "),l("li",[_._v("416(请求范围不符合要求)。如果页面无法提供请求的范围，则服务器会返回此状态码。")]),_._v(" "),l("li",[_._v("417(未满足期望值)。服务器未满足” 期望” 请求标头字段的要求。")])]),_._v(" "),l("h4",{attrs:{id:"_5xx-服务器错误-server-error-服务器错误状态码"}},[_._v("5xx(服务器错误) Server Error 服务器错误状态码")]),_._v(" "),l("p",[_._v("这些状态码表示服务器在处理请求时发生内部错误。这些错误可能是服务器本身的错误，而不是请求出错。")]),_._v(" "),l("ul",[l("li",[_._v("500(服务器内部错误)Internal Server Error。服务器遇到错误，无法完成请求。")]),_._v(" "),l("li",[_._v("501(尚未实施)Service Unavailable。服务器不具备完成请求的功能。例如，服务器无法识别请求方法时可能会返回此代码。")]),_._v(" "),l("li",[_._v("502(错误网关)。服务器作为网关或代理，从上游服务器收到无效响应。")]),_._v(" "),l("li",[_._v("503(服务不可用)。服务器目前无法使用（由于超载或停机维护）。通常，这只是暂时状态。")]),_._v(" "),l("li",[_._v("504(网关超时)。服务器作为网关或代理，但是没有及时从上游服务器收到请求。")]),_._v(" "),l("li",[_._v("505(HTTP 版本不受支持)。服务器不支持请求中所用的 HTTP 协议版本。")])]),_._v(" "),l("h2",{attrs:{id:"实战学习"}},[_._v("实战学习")]),_._v(" "),l("p",[_._v("学习网络协议，一定要抓包实践分析。")]),_._v(" "),l("p",[_._v("TCP、IP 协议栈：")]),_._v(" "),l("ul",[l("li",[_._v("应用层\n"),l("ul",[l("li",[_._v("HTTP")]),_._v(" "),l("li",[_._v("WebSocket")]),_._v(" "),l("li",[_._v("HTTP/2")])])]),_._v(" "),l("li",[_._v("应用层的安全基础设施\n"),l("ul",[l("li",[_._v("TLS/SSL")])])]),_._v(" "),l("li",[_._v("传输层\n"),l("ul",[l("li",[_._v("TCP")])])]),_._v(" "),l("li",[_._v("应用层及数据链路层\n"),l("ul",[l("li",[_._v("IP 层和以太网")])])])]),_._v(" "),l("p",[_._v("工具：")]),_._v(" "),l("ul",[l("li",[_._v("浏览器的 Network 面板")]),_._v(" "),l("li",[_._v("Wireshark")]),_._v(" "),l("li",[_._v("Tcpdump")])])])}],!1,null,null,null);v.default=t.exports}}]);