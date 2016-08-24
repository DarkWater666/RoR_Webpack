const path              = require('path'),
      webpack           = require('webpack'),
      precss            = require('precss'),
      ccsnext           = require('postcss-cssnext'),
      rucksack          = require('rucksack-css'),
      size              = require('postcss-size'),
      nestedProps       = require('postcss-nested-props'),
      nested            = require('postcss-nested'),
      nestedAncestors   = require('postcss-nested-ancestors'),
      easyimport        = require('postcss-easy-import')({ extensions: ['.sss'], addDependencyTo: webpack }),
      autoreset         = require('postcss-autoreset')({
                            reset: {
                              all: 'initial',
                              fontSize: '1rem',
                              fontFamily: 'inherit',
                              fontWeight: 'inherit',
                              fontStyle: 'inherit'
                            },
                            rulesMatcher: function rulesMatcher(rule) {
                              return !rule.selector.match(/([^_]_[^_]|:|::)/);
                            }
                          }),
      fontMagician      = require('postcss-font-magician'),
      flexbugs          = require('postcss-flexbugs-fixes'),
      webpackCSS        = require('extract-text-webpack-plugin'),
      prodBuild         = process.env.NODE_ENV === 'production';

var config = {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    './app/clientside/application'
  ],
  output: {
    path: path.join(__dirname, '/app/assets/javascripts/'),
    filename: prodBuild ? 'client.min.js' : 'client.js'
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
          [
            'css?modules&importLoaders=1&localIdentName=[name]-[local]---[hash:base64:5]&minimize',
            'postcss?parser=sugarss'
          ].join('!')
        )
      }
    ]
  },
  postcss: function() {
    return [easyimport, precss, ccsnext, nested, nestedAncestors, fontMagician,
            rucksack, size, autoreset, flexbugs];
  },
  plugins: [
    new webpackCSS('../stylesheets/client.min.css')
  ]
};

if (prodBuild) {
  config.plugins.push(
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  );
}

module.exports = config;
