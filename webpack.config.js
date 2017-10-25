'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'reveal.js'],
    app: './src/app.js',
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[hash].js',
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      include: path.resolve(__dirname, './src'),
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: 'file-loader',
      options: {
        outputPath: 'fonts/',
        name: '[name].[hash].[ext]',
      },
    }],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // minChunks: Infinity,
      // chunks: ['reveal.js'],
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    hot: true,
    contentBase: './build',
  },
};