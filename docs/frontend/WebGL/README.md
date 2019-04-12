# WebGL

WebGL 技术储备。

### WebGL demo & 3D 参考网站

- [x3dom](https://www.x3dom.org/)
- [stack.gl](http://stack.gl/)
- [three.js](https://threejs.org/)
- [A-Frame](https://aframe.io/)
- [MapboxGL](https://docs.mapbox.com/help/glossary/mapbox-gl/)
- [Rain sound generator](https://rainbowhunt.me/)

### 入门初级知识

- [WebGL Fundamentals](https://webglfundamentals.org/) & https://zhuanlan.zhihu.com/p/47454989,简体翻译是一个人。

参考文章:

- [WebGL 技术储备指南](https://xieguanglei.github.io/blog/post/webgl-handbook.html)。

**知识储备**

- 类型化数组
- 矩阵变换
- 着色器和光栅化
- 程序
- 深度检测
- 顶点索引
- 纹理
- 混合与蒙版
- 浏览器的 WebGL 系统
- 光照
- 复杂模型
- 动画。动画的原理就是快速地擦除和重绘。常用的方法是大名鼎鼎的 requestAnimationFrame。不熟悉的同学，可以参考[司徒正美](http://www.cnblogs.com/rubylouvre/archive/2011/08/22/2148797.html)和张鑫旭的介绍。
- WebGL 库。WebGL 最流行的库， Three.js。
- 调试工具。[WebGL Inspector](http://benvanik.github.io/WebGL-Inspector/)

WebGL 同 Canvas 一样，需要获取绘图上下文：

```js
var gl = canvas.getContext("webgl"); // 或者 expermental-webgl
```

Canvas 画一个矩形是很简单的，但是 WebGL 就不一样了。

类型化数组:

WebGL 涉及复杂计算需要提前知道数值的精度，而标准的 JavaScript 数值无法满足需求。为此，WebGL 引入一个概念，叫做 **类型化数组**(typed arrays)。类型化数组也是数组，只不过元素被设置为特定类型的值。

类型化数组的核心就是一个名为 **ArrayBuffer** 的类型。每个 ArrayBuffer 对象表示的只是内存中指定的字节数，但不会指定这些字节用于保存什么类型的数据。通过 ArrayBuffer 能做的，就是为将来使用而分配一定数量的字节。例如，下面这行代码会在内存中分配 20B。(和 C 的缓存一个意思么？)

```js
var ArrayBuffer = new ArrayBuffer(20);
```

我擦，还真是，使用 ArrayBuffer(数组缓冲器类型)就是用来创建数组缓冲器视图。(高程 15 章 WebGL 相关内容)。

类型化数组是 WebGL 项目中执行各种操作的重要基础。

如果 `getContext()` 无法创建 WebGL 上下文，有的浏览器会抛出错误，所以，最好把调用封装到一个 `try-catch` 块中。

```js
let drawing = document.getElementById("drawing"),
  gl;

// 确定浏览器是否支持 <canvas> 元素
if (drawing.getContext) {
  try {
    gl = drawing.getContext("experimental-webgl");
  } catch (ex) {
    // 什么也不做
    console.log("can't use WebGL");
  }

  if (gl) {
    // 使用 WebGL
    console.log("Use WebGL");
  } else {
    alert("WebGL context could not be created.");
  }
}
```

**绘图前准备**

实际操作 WebGL 上下文前，一般会使用实色清楚 `<canvas>`, 为绘图前做准备, 首先必须使用 [clearcolor()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearColor) 方法来指定要使用的颜色值。

```js
gl.clearColor(0, 0, 0, 1); // black

// get current clear value
gl.getParameter(gl.COLOR_CLEAR_VALUE);
```

**视口与坐标**

视口与坐标: 绘图之前需要定义 WebGL 的 viewport，是相对于 canvas 元素。

- 1.视口坐标与网页坐标不一样，视口坐标原点是在 canvas 元素的左下角，x,y 轴分别是向右和向上；
- 2.视口内部的坐标系于定义视口的坐标系也是不一样的。在视口内部，坐标原点(0,0)是视口的中心点，因此视口左下角坐标为(-1,-1), 而右上角坐标为(1,1)。

**缓冲区**

顶点信息保存在 JavaScript 类型化数组中，使用之前必须转到 WebGL 的缓冲区。创建缓冲区，可以调用 [gl.createBuffer()](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/createBuffer)，然后使用 [gl.bindBuffer()](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/bindBuffer) 绑定到 WebGL 上下文，就可以用数据来填充缓冲区了，如：

```js
let buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0.5, 1]), gl.STATIC_DRAW);
```

**着色器**

着色器(shader)是 OpenGL 中的另一个概念。WebGL 中有两种：

- 1.顶点着色器，用于将 3D 顶点转换为需要渲染的 2D 点；
- 2.片段(或像素)着色器，用于准确计算要绘制的每个像素的颜色。

不过着色器的独特之处在于不是用 JavaScript 写的，而是用 GLSL(OpenGL Shading Language)，与 C 和 JavaScript 语言不同。

为着色器传递数据的方式有两种属性：

- 1.Attribute，通过 Attribute 可以向顶点着色器中传入顶点信息；
- 2.Uniform，通过 Uniform 可以想任何着色器传入常量值。

着色器程序，可以写在自定义 script 标签里，因为浏览器不能理解 GLSL，那么就要准备好字符串形式的 GLSL 程序。

有了 字符串形式的 GLSL 程序后，就是创建着色器对象 [gl.createShader()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createShader), 传入要创建的着色器类型 ()。

**绘图**

WebGL 只能绘制三种状态：点、线、三角。其他的状态都是由这三种形状合成之后，再绘制到三维空间中。

- 1.[gl.drawArray()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays)，用于数组缓冲区；
- 2.[gl.drawElements()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements)，用于元素数组缓冲区。

调试：

- GLSL 不能打印的时候只能去猜这个变量到底是个什么值？给每个像素的颜色 RGB 设定为这个值，观察绘制变化，通过颜色去验证数值正不正确
- Chrome-WebGL 插件：WebGL Inspector 、WebGL Insight

**创建纹理贴图**

```js
/** 创建纹理贴图
 *
 *
 *
 */
```

**参考书籍**

英文：很多，去 MDN、Google、Github 搜。

中文：

- [WebGL 入门指南]()，其实是一个 three.js 教程。
- [WebGL 高级编程：开发 Web 3D 图形]()
- [WebGL 编程指南](), 目前再看(后面复杂的等用到的时候再翻出来详细查)。这本书的[英文版](https://www.amazon.com/WebGL-Programming-Guide-Interactive-Graphics/dp/0321902920/ref=sr_1_1?ie=UTF8&qid=1409015819&sr=8-1&keywords=webgl+programming+guide)

### 1.WebGL 程序(网页)软件结构？

WebGL 程序使用三种语言开发：HTML、JavaScript 和 GLSL ES——然后由于着色器代码 GLSL ES 内嵌在 JavaScript 中，所以 WebGL 网页的文件结构和传统网页是一样的。

### 2.WebGL 如何使用 `<canvas>` 元素并在其上绘图？

只需要添加 canvas 元素，获取上下文即可。遵循的流程如下：

- 1.获取 canvas 元素
- 2.获取 WebGL 绘图上下文
- 3.初始化着色器
- 4.设置 canvas 背景色
- 5.清除 canvas 
- 6.绘图

#### 2.1.HTML 文件如何引入 WebGL JavaScript 文件？

- 直接本地引用，例如书中的 `lib` 文件的下的 JavaScript 文件；
- CND 引用；

### 3.HTML 文件和用 JavaScript 编写的 WebGL 代码文件的连接？

### 4.简单的 WebGL 绘图函数？

绘制一个点，原点(0.0, 0.0, 0.0)处就在 canvas 的中心位置。开始只将了用矩形画一个点，第十章中提到了画一个圆点。

### 5.着色器程序在 WebGL 中的地位？

着色器是 WebGL 的一项重要机制，它会贯穿全文。

着色器是以为字符串的形式嵌入在 JavaScript 文件中。

- 顶点着色器(Vertex Shader)，描述顶点特性(如位置、颜色)，顶点指二位或三维空间的一个点(端点或交点)；
- 片元着色器(Fragment Shader)，进行逐片元处理过程(如光照)，片元 WebGL 术语，理解为像素(图像的单元)。

如下显示了程序的执行流程, 用 sketchboard 画的比较简陋：

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190408033142.jpg"/>

### 6.齐次坐标系？

其次坐标使用`(x, y, z, w)`表示，等价于三维坐标系`(x/w, y/w, z/w)`。所以齐次坐标第 4 个分量是 1，就可以当做三维坐标来使用，进而使得**矩阵乘法**来描述顶点，通常使用齐次坐标表示顶点的三维坐标。

### x.三角形的关键作用，以及 WebGL 对绘制三角形的支持？

### x.使用多个三角形绘制出其他图形？

### x.使用方程对三角形进行基本的变换,如平移、旋转和缩放等？

### x.矩阵可以简化变换的运算？

### x.在矩阵库的帮助下，探索如何实现简单的动画？

### x.顶点着色器和片元着色器之间的光栅化过程，将图形转化为了片元？

### x.如何将图像(或纹理)贴到图形或模型的表面。

纹理坐标系(Texture Coordinates)




### x.如何在三维空间中表示观察者，如何控制可视的三维空间体积？

### x.裁剪，物体的前后关系？

### x.绘制一个三维物体——立方体。

### x.光照？

- 着色、阴影和不同类型的光源产生的光，包括点光源光、平行光和环境光
- 三维场景中两种主要的反射光类型：漫反射和环境反射
- 着色的细节，以及如何实现光照效果时候=场景更像是三维的

### x.层次模型？

层次模型能够使复杂模型，如游戏角色、机器人，甚至是真人模型产生动作，而不仅仅是生硬的立方体。

### x.高级技术

...

### x.WebGL 为什么无须像 OpenGL 那样交换缓冲区？

### GLSL ES 1.0 内置函数

### 投影矩阵

Matrix4.setOrtho() 函数和 Matrix4.setPerspective() 函数生成的投影矩阵。

### x.WebGL/OpenGL 左手还是右手坐标系？

从技术上解释为什么说 WebGL 和 OpenGL 对采取左手左边系和右手坐标系是中立的

### x.逆转值矩阵

解释了模型矩阵的逆转值矩阵为什么卡原用来变换法向量。

### x.如何从文件中加载着色器程序？

- 利用加载三维模型文件的方法；(参考附录F)

### x.世界坐标系和本地坐标系?

两种不同的坐标系统，以及如何在三维入刑中使用？

WebGL 坐标系统，笛卡尔坐标系，观察者的眼睛位于原点(0.0, 0.0, 0.0),默认使用右手坐标系。现在认为右手坐标系，有专门说 **WebGL/OpenGL：左手坐标系还是右手坐标系？** 实际上，两者都不是。

WebGL 的坐标系和 canvas 绘图区的坐标系不同，需要将前者映射到后者，默认情况下对应关系如下：

- canvas 中心点(0.0, 0.0, 0.0);
- canvas 的上边缘和下边缘(-1.0, 0.0, 0.0) 和 (1.0, 0.0, 0.0);
- canvas 的左边缘和右边缘(0.0, -1.0, 0.0) 和 (0.0, 1.0, 0.0)。

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20190411225455.png"/>

> 图片来自 http://nickdesaulniers.github.io/RawWebGL/#/33

### x.WebGL 的浏览器设置

介绍浏览器的高级设置方法，以确保 WebGL 程序能够正确运行，以及程序不能正确运行时对应的方法。

#### 支持 WebGL 的浏览器

WebGL 被 Chrome、Firefox、Safari、Opera 浏览器支持。

但是 IE9 并不支持 WebGL，Chrome 还支持一些有用的特性，如调试 WebGL 的控制台函数。

- 参考页面(获取最新的、关于可能导致问题的硬件列表): https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists
- 《WebGL 编程指南》的帮助网站：https://sites.google.com/site/webglbook/

《WebGL 编程指南》排版约定：

- **粗体 Blod**——术语或重要词汇首次出现；
- 斜体*Italic*——函数参数名、或引用名、程序名或文件名；
- Monospace 字体——实例代码、方法、函数、变量、命令行选项、JavaScript 对象名称、HTML 标签名称。

### 什么是 GPGPU? 只有 example，木有资料？

- https://github.com/keijiro/Firefly

## 进阶

- WebGL-Next
- WebGL-insight

## 需要补一些图形学的知识

- 图形学基本原理和进阶原理

[图形学](http://mecg.me/wiki/doku.php?id=cg:index)

贴图、纹理、材质的区别？

在实践中的大致层级关系是： 材质(Material) 包含贴图(Map), 贴图包含纹理(Textture)。

Map 是 Textture 的容器，定义了纹理如何被 3D 物体使用。

## 过程踩坑

### 1.
