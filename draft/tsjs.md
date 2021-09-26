##

## 安装

方法 1：html 中直接加载 tfjs 的 cdn 文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>tensorflow</title>
  </head>

  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js"></script>
  <script>
    const a = tf.tensor("1");
    a.print();
  </script>
</html>
```

可以看到控制台输出：

```
Tensor
    1
```

方法 2：安装 `@tensorflow/tfjs-node` 包

```bash
$ yarn add @tensorflow/tfjs
# or
$ npm install @tensorflow/tfjs
```

> https://www.tensorflow.org/js/tutorials/setup
