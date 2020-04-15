const postcssCssnext = require('postcss-cssnext');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

module.exports = {
  plugins: [
    postcssCssnext({
      features: {
        customProperties: {
          warnings: false,
        },
      },
    }),
    postcssImport(),
    cssnano(),
    postcssFlexbugsFixes(),
  ],
};
