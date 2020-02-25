const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    }
  },
  devServer: {
    host: '127.0.0.1',
    port: '3001',
    hot: true,
    inline: true,
    open: 'Google Chrome'
  }
};