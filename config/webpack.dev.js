const webpack = require('webpack');
const path = require('path');
const PostcssCssnext = require('postcss-cssnext');
const Cssnano = require('cssnano');

const devConfig = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                PostcssCssnext(),
                Cssnano(),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                PostcssCssnext(),
                Cssnano(),
              ],
            },
          },
        ],
      },
    ],
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
    open: true,
  },
};

module.exports = devConfig;
