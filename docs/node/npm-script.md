# npm scripts

[npm scripts](https://docs.npmjs.com/cli/v7/using-npm/scripts)，简单来说，就是可以在 `package.json` 里面定义脚本。

```json
{
  "name": "my-proj",
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "server": "node ./server/index.js",
    "fetch:blocks": "pro fetch-blocks && npm run prettier"
  },
  "devDependencies": {
    "react": "^16.0.0",
    "@ant-design/pro-cli": "^1.0.28"
  }
}
```

定义的脚本就可以通过命令执行：

```bash
$ npm run dev # or yarn dev

$ npm run start # or yarn start

# 执行并传参，需要多一个 --
$ npm run dev -- --inline
```

但是上面的 [pro](https://github.com/ant-design/ant-design-pro-cli) 是哪来的？这是 npm 的一个很重要的特性：

- 通过 `npm run your-scripts` 启动的脚本，会默认把 `node_modules/.bin` 加到 PATH 环境变量中；
- 由于 ant-design-pro-cli 有定义 [bin 字段](https://github.com/ant-design/ant-design-pro-cli/blob/master/package.json#L5-L7)，因此安装后会软链到 `node_modules/.bin` ，从而能被寻址并执行，可以通过 `npx pro -h` 命令尝试体验。且 bin 字段是可以有多个属性的。
