const webpack = require('webpack');
const path = require('path');

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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: { '@primary-color': '#1DA57A' },
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
    // open: true,
  },
};

module.exports = devConfig;
