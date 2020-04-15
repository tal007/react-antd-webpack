// webpack alias
const path = require('path');

module.exports = {
  // import 引入可以省略后缀的文件
  extensions: ['.js', '.jsx'],
  // 别名
  alias: {
    '@': path.resolve(__dirname, '../src'),
    '@comp': path.resolve(__dirname, '../src/components'),
    '@img': path.resolve(__dirname, '../src/img'),
    '@styl': path.resolve(__dirname, '../src/style'),
    '@pages': path.resolve(__dirname, '../src/pages'),
  },
};
