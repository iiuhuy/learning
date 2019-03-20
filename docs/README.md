---
home: true
# heroImage: /alvinmi.jpeg
actionText: 开始持续学习 →
actionLink: /about/
footer: 余辉 Copyright © 2018
---

<!-- <div style="text-align: center">
  <Bit/>
</div> -->

<div class="features">
  <div class="feature">
    <h2>前端篇技术总结</h2>
    <p>总结日常用到的答疑，和技术坑。</p>
  </div>
  <div class="feature">
    <h2>后端篇技术积累</h2>
    <p>需要懂点后台技能。</p>
  </div>
  <div class="feature">
    <h2>观望物联网</h2>
    <p>总结自己关注的嵌入式、物联网相关。</p>
  </div>
</div>

### 安装

``` bash
# install
yarn global add vuepress@next 
# OR npm install -g vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build to static files
vuepress build

# npx 
npx vuepress dev docs

# 使用 yarn 
yarn dev

yarn build
```

### 部署

```
bash deploy.sh
```
::: warning COMPATIBILITY NOTE
VuePress requires Node.js >= 8.
:::

遇到了 vuepress UnhandledPromiseRejectionWarning 警告，导致浏览器不能预览。

- 参考： https://github.com/vuejs/vuepress/issues/1417