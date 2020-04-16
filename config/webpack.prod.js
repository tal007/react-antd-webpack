const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const externals = require('./externals');
const styleRules = require('./styleRules');

const bundleAnalyzer = false;

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/bundle.[hash:8].js',
  },
  externals,
  module: {
    rules: styleRules,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // 这里的配置和webpackOptions.output中的配置相似
      // 即可以通过在名字前加路径，来决定打包后的文件存在的路径
      filename: 'css/[name].[hash:8].css',
    }),
    bundleAnalyzer && new BundleAnalyzerPlugin(),
  ],
};

module.exports = prodConfig;
