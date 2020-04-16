const webpack = require('webpack');
const styleRules = require('./styleRules');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: styleRules,
  },
  plugins: [
    // 热更新插件
    new webpack.HotModuleReplacementPlugin(),
    // 打印更新文件路径
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    port: 4000,
    hot: true,
    // 启用gzip压缩预览
    compress: true,
    open: true,
    // 解决 BrowserRouter 刷新 404 问题
    historyApiFallback: true,
  },
};

module.exports = devConfig;
