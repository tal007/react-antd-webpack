react + antd + webpack

## loaders
### babel-loader
处理js，jsx，ts，tsx语法

### style-loader，css-loader，less-loader，postcss-loader
处理css

style-loader：添加到js中，这样修改才会热更新，在开发环境中需要加上，生产环境如果使用`mini-css-extract-plugin`抽离css，那么不要加上style-loader

注意loader使用顺序

使用less-loader需要同时安装less库

postcss-loader处理css中的一些问题，压缩等，同时可以使用postcss插件，例如`postcss-flexbugs-fixes`, `postcss-cssnext`, `cssnano` 等。


### file-loader
处理文件（字体，图片，影视频等）并重新命名

### url-loader
处理图片，设置路径以及base64图片压缩


## plugins
### html-webpack-plugin
设置html模板以及输出路径等

### webpack.ProvidePlugin
设置webpack全局变量

```js
new webpack.ProvidePlugin({
  // 这样就不用每个文件都引用react了，但是需要在eslintrc中配置eslint语法检测
  React: 'react',
}),
```

### mini-css-extract-plugin
css代码抽离，详见`config/webpack.prod.js`

### clean-webpack-plugin
清除之前打包的代码

### 热更新
`webpack.HotModuleReplacementPlugin` 与 `webpack.NamedModulesPlugin()`。前者使用热更新，后者在控制台展示热更新名字。

热更新需要同时使用 `react-hot-loader`。

> npm i --save-dev react-hot-loader

使用详见： `src/App.jsx`。还需要在 `.babelrc` 中配置 plugins

## 代码规范
ESlint + Prettier

> npm i --save-dev eslint


### 配合VSCode使用
VSCode 安装插件

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

.eslintrc.js中添加

```js
"plugins": ["prettier"],
"rules": {
  "prettier/prettier": "error"
}
```

添加 .ptettierrc.js 配置如下，可自行修改

```js
// configs see https://prettier.io/docs/en/options.html

module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
  arrowParens: 'always'
}
```

在settings.json 中添加如下

```json
// jsx自动修复有问题，取消js的format
"editor.formatOnSave": false,
// Enable/disable default JavaScript formatter (For Prettier)
"javascript.format.enable": false,
"prettier.singleQuote": true,
// 点击保存时，根据 eslint 规则自定修复，同时集成 prettier 到 eslint 中
"prettier.eslintIntegration": true,
// 保存自动修复
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

## 问题
### 使用 BrowserRouter 刷新 404 
在 devServer 中 添加 `historyApiFallback: true`

### 使用 webpack alias 的时候路径提示
根目录添加 `jsconfig.json` 文件，与 alias 中的对应

```json
{
  "compilerOptions": {
      "experimentalDecorators": true,
      "baseUrl": "./",
      "paths": {
        "@/*": ["./src"],
        "@comp/*": ["./src/components"],
        "@img/*": ["./src/img"],
        "@styl/*": ["./src/style"],
        "@pages/*": ["./src/pages"],
      }
  },
  "exclude": ["node_modules", "dist"]
}

```
