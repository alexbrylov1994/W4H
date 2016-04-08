/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',

  entry: {
    main: [
      './src/app'
    ]
  },
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },

    {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      loader: 'style!css!sass'
    }
  ]}
};
