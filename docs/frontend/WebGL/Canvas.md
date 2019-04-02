# Canvas

canvas 绘图先要获取绘图上下文：

```js
vat context = canvas.getContext('2d');
```

在 context 上调用各种函数绘制图形，比如：

```js
// 绘制左上角为 (0,0)，右下角为 (50,50) 的矩形
context.fillRect(0, 0, 50, 50);
```

Canvas 的知识可以参考：

- 《JavaScript 高级程序设计》第 15 章内容

### 绘制矩形的方法

下面三个方法都接收四个参数，矩形的 x 坐标，矩形的 y 坐标，矩形的宽度和高度 。

- 1.`fillRect()`,绘制的矩形会填充指定的颜色；
- 2.`strokeRect()`,绘制的矩形会使用指定的颜色描边；
- 3.`clearRect()`,清除画布上的矩形区域，本质上可以把画布上矩形的区域变成透明。

### 绘制路径

使用 `arc()` 绘制两个圆形，然后组合使用 `moveTo()` 和 `lineTo()` 来绘制时针和分针，最后调用 `stroke()` 方法，把图形绘制到画布上。

```js
function drawing() {
  var ctx = document.getElementById("ctx");

  if (ctx.getContext) {
    var context = ctx.getContext("2d");

    // 开始画路径
    context.beginPath();

    // 绘制外圆
    context.arc(100, 100, 99, 0, 2 * Math.PI, false);

    // 绘制内圆
    context.moveTo(194, 100);
    context.arc(100, 100, 94, 0, 2 * Math.PI, false);

    // 绘制分针
    context.moveTo(100, 100);
    context.lineTo(100, 15);

    // 绘制时针
    context.moveTo(100, 100);
    context.lineTo(35, 100);

    // 描边路径
    context.stroke();
  }
}
```

### 绘制文本

主要有两个方法，都可以接收 4 个参数：要绘制的文本字符串、x 坐标、y 坐标和可选的最大像素宽度。

两个方法都以下列的 3 个属性为基础：

- 1.font: 表示文本样式、大小及字体，用 CSS 中指定字体的格式来指定，例如：`10px Arial`;
- 2.textAlign: 表示文本对齐方式。
- 3.textBaseline: 表示文本的基线。

在上面的代码基础上。绘制数字 12。

```js
context.font = "bold 14px Arial";
context.textAlign = "center";
context.textBaseline = "middle";
context.fillText("12", 100, 20);
```

- 1.`fillText()`,
- 2.`strokeText()`,
