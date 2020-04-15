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
