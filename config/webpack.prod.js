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
  externals,
  module: {
    rules: styleRules,
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000, // 模块的最小体积
      minChunks: 1, // 模块的最小被引用次数
      maxAsyncRequests: 5, // 按需加载的最大并行请求数
      maxInitialRequests: 3, // 一个入口最大并行请求数
      automaticNameDelimiter: '~', // 文件名的连接符
      name: true,
      cacheGroups: {
        // 缓存组
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
      }),
    ],
  },
  plugins,
};

module.exports = prodConfig;
