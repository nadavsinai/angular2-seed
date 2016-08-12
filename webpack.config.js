"use strict";
const webpack = require('webpack');
const path = require('path');
const productionEnv = process.argv.indexOf('production') || process.env.NODE_ENV === 'production';

// Webpack Config
var webpackConfig = {
  entry: {
    'polyfills': './src/polyfills.browser.ts',
    'vendor': './src/vendor.browser.ts',
    'main': './src/main.browser.ts'
  },
  output: {
    path: './dist'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.LoaderOptionsPlugin({
      minimize: productionEnv,
      debug: false // !productionEnv if debugging the build
    }),
    new webpack.optimize.CommonsChunkPlugin({name: ['main', 'vendor', 'polyfills'], minChunks: Infinity})
  ],

  module: {
    noParse: ['systemjs/dist/.*'],
    loaders: [
      // .ts files for TypeScript
      {test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader']},
      {test: /\.css$/, loaders: ['to-string-loader', 'css-loader']},
      {test: /\.html$/, loader: 'raw-loader'}
    ]
  }

};


// Our Webpack Defaults
var defaultConfig = {
  devtool: 'cheap-module-source-map',
  cache: true,
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), "node_modules"],
    extensions: ['', '.ts', '.js']
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: {aggregateTimeout: 300, poll: 1000}
  },

  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    fs: 'empty',
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  }
};

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);
