const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDEV = process.env.NODE_ENV === 'development';

const devCssLoader = ['style-loader', 'css-loader', 'postcss-loader'];
const devLessLoader = [
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
];

const prodCssloader = [MiniCssExtractPlugin.loader].concat(devCssLoader);
const prodLessLoader = [MiniCssExtractPlugin.loader].concat(devLessLoader);

const rules = [
  {
    test: /\.css$/,
    use: isDEV ? devCssLoader : prodCssloader,
  },
  {
    test: /\.less$/,
    use: isDEV ? devLessLoader : prodLessLoader,
  },
];

module.exports = rules;
