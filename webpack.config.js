const merge = require('webpack-merge');
const commConfig = require('./config/webpack.common');
const developmentConfig = require('./config/webpack.dev');
const productionConfig = require('./config/webpack.prod');

const isDEV = process.env.NODE_ENV === 'development';

let config;
if (isDEV) {
  config = merge(commConfig, developmentConfig);
} else {
  config = merge(commConfig, productionConfig);
}

module.exports = config;
