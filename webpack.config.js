const path              = require('path'),
      webpack           = require('webpack'),
      precss            = require('precss'),
      ccsnext           = require('postcss-cssnext'),
      rucksack          = require('rucksack-css'),
      size              = require('postcss-size'),
      nestedProps       = require('postcss-nested-props'),
      nested            = require('postcss-nested'),
      nestedAncestors   = require('postcss-nested-ancestors'),
      assets            = require('postcss-assets')({
                            loadPaths: ['./app/clientside/fonts', './app/clientside/images']
                          }),
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
      fontMagician      = require('postcss-font-magician')({
                            hosted: './app/clientside/fonts'
                          }),
      flexbugs          = require('postcss-flexbugs-fixes'),
      webpackCSS        = require('extract-text-webpack-plugin'),
      // styleLint         = require('stylelint-webpack-plugin'),
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
    filename: 'client' + (prodBuild ? '.min' : '') + '.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.sss']
  },
  module: {
    loaders: [
      { test: require.resolve('react'), loader: 'imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham' },
      { test: /\.jsx$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
      { test: /\.sss$/, loader:
        webpackCSS.extract(
          'style',
          [
            'css?modules&importLoaders=1&localIdentName=[name]-[local]---[hash:base64:5]' +
            (prodBuild ? '&minimize' : ''),
            'postcss?parser=sugarss'
          ].join('!')
        )
      }
    ]
  },
  postcss: function() {
    return [assets, easyimport, precss, ccsnext, nested, nestedAncestors, fontMagician,
            rucksack, size, autoreset, flexbugs];
  },
  plugins: [
    // new styleLint({
    //   configFile: '.stylelintrc',
    //   context:    'app/clientside',
    //   files:      '**/*.s?(a|c|s)ss',
    //   failOnError: true
    // }),
    new webpackCSS('../stylesheets/client' + (prodBuild ? '.min' : '') + '.css')
  ]
};

if (prodBuild) {
  config.plugins.push(
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  );
}

module.exports = config;
