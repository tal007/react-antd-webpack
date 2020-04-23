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
      chunks: 'all',
      cacheGroups: {
        lib: {
          name: 'chunks-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial', // 只打包初始时依赖的第三方
        },
        antdDesign: {
          name: 'antdDesign', // 单独将 elementUI 拆包
          priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
          test: /[\\/]node_modules[\\/]@ant-design[\\/]/,
          chunks: 'all',
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
