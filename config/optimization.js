// webpack Optimization https://webpack.js.org/configuration/optimization/

module.exports = {
  splitChunks: {
    cacheGroups: {
      vender: {
        name: 'vender',
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all',
        priority: 10,
      },
      common: {
        name: 'common',
        chunks: 'all',
        minSize: 1,
        priority: 0,
      },
    },
  },
};
