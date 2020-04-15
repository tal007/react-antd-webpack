const webpack = require('webpack');
const path = require('path');
const styleRules = require('./styleRules');

const devConfig = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.[hash].js',
  },
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
    // 启用压缩
    compress: true,
    // open: true,
  },
};

module.exports = devConfig;
