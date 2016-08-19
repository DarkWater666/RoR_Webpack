// var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './app/clientside/application.jsx',
  output: {
    path: __dirname + '/app/assets/javascripts/front/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    // new LiveReloadPlugin()
  ]
};
