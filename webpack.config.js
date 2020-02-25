const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpeg|jpg|svg)$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    host: '127.0.0.1',
    port: '3001',
    // hot: true,
    // inline: true,
    open: 'Google Chrome'
  }
};