# WebGL

## WebGL 技术储备

参考:

- [WebGL 技术储备指南](https://xieguanglei.github.io/blog/post/webgl-handbook.html)，仔细多读几遍。

WebGL 同 Canvas 一样，需要获取绘图上下文：

```js
var gl = canvas.getContext("webgl"); // 或者 expermental-webgl
```

Canvas 画一个矩形是很简单的，但是 WebGL 就不一样了。

**知识储备**

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

**参考书籍**

英文：

很多，去 MDN、Google、Github 搜。

中文：

- [WebGL 入门指南]()，其实是一个 three.js 教程。
- [WebGL 高级编程：开发 Web 3D 图形]()
- [WebGL 编程指南](), 目前再看(后面复杂的等用到的时候再翻出来详细查)。这本书的[英文版](https://www.amazon.com/WebGL-Programming-Guide-Interactive-Graphics/dp/0321902920/ref=sr_1_1?ie=UTF8&qid=1409015819&sr=8-1&keywords=webgl+programming+guide)

### x.WebGL 如何使用 `<canvas>` 元素并在其上绘图？

### x.HTML 文件和用 JavaScript 编写的 WebGL 代码文件的连接？

### x.简单的 WebGL 绘图函数？

### x.着色器程序在 WebGL 中的地位？

### x.三角形的关键作用，以及 WebGL 对绘制三角形的支持？

### x.使用多个三角形绘制出其他图形？

### x.使用方程对三角形进行基本的变换,如平移、旋转和缩放等？

### x.矩阵可以简化变换的运算？

### x.在矩阵库的帮助下，探索如何实现简单的动画？

### x.顶点着色器和片元着色器之间的光栅化过程，将图形转化为了片元？

### x.如何将图像(或纹理)贴到图形或模型的表面。

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

###　 GLSL ES 1.0 内置函数

### 投影矩阵

Matrix4.setOrtho() 函数和 Matrix4.setPerspective() 函数生成的投影矩阵。

### x.WebGL/OpenGL 左手还是右手坐标系？

从技术上解释为什么说 WebGL 和 OpenGL 对采取左手左边系和右手坐标系是中立的

### x.逆转值矩阵

解释了模型矩阵的逆转值矩阵为什么卡原用来变换法向量。

### x.如何从文件中加载着色器程序？

### x.世界坐标系和本地坐标系?

两种不同的坐标系统，以及如何在三维入刑中使用？

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

###
