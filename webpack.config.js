const path         = require('path');
const precss       = require('precss');
const autoprefixer = require('autoprefixer');
const rucksack     = require('rucksack-css');
const nested       = require('postcss-nested-props');
const easyimport   = require('postcss-easy-import')({ extensions: ['.sss'] });
const webpackCSS   = require('extract-text-webpack-plugin');

config = {
  context: __dirname,
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    './app/clientside/application'
  ],
  output: {
    path: path.join(__dirname, '/app/assets/javascripts/front/'),
    filename: 'client.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: require.resolve('react'), loader: 'imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham' },
      { test: /\.jsx$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
      { test: /\.sss$/, loader:
        webpackCSS.extract(
          'style',
          [ 'css?modules&importLoaders=1&localIdentName=[name]-[local]',
            'postcss?sourceMap=inline&parser=sugarss'
          ].join('!')
        )
      }
    ]
  },
  postcss: function() {
    return [precss, nested, easyimport, rucksack, autoprefixer];
  },
  plugins: [
    new webpackCSS('../../stylesheets/front/client.css')
  ]
};

module.exports = config;
