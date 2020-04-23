const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const externals = require('./externals');
const styleRules = require('./styleRules');

const bundleAnalyzer = true;

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    // 这里的配置和webpackOptions.output中的配置相似
    // 即可以通过在名字前加路径，来决定打包后的文件存在的路径
    filename: 'css/[name].[hash:8].css',
  }),
];

if (bundleAnalyzer) {
  plugins.unshift(new BundleAnalyzerPlugin());
}

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/bundle.[hash:8].js',
    chunkFilename: 'js/[name].[hash:8].js', // 动态import文件名
  },
  // externals,
  module: {
    rules: styleRules,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // 这里才是最重要的配置
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          minSize: 50000,
          minChunks: 1,
          chunks: 'initial',
          priority: 1, // 该配置项是设置处理的优先级，数值越大越优先处理
        },
        commons: {
          test: /[\\/]src[\\/]/,
          name: 'commons',
          minSize: 50000,
          minChunks: 2,
          chunks: 'initial',
          priority: -1,
          reuseExistingChunk: true, // 这个配置允许我们使用已经存在的代码块
        },
        antdDesign: {
          name: 'antd-design', // 单独将 antd-design 拆包
          priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
          test: /[\\/]node_modules[\\/]@ant-design[\\/]/,
          chunks: 'all',
        },
        lodash: {
          name: 'lodash', // 单独将 lodash 拆包
          priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          chunks: 'all',
        },
        reactLib: {
          name: 'react-lib', // 单独将 lodash 拆包
          priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // sourceMap: true,
        parallel: true,
        extractComments: false,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins,
};

module.exports = prodConfig;
