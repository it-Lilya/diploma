const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
// import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
      {
        test: /\.ico$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
// export const devServer = {
//   port: 9000,
// };
// export const plugins = [
//   new HtmlWebpackPlugin({
//     template: './src/index.html',
//     filename: './index.html',
//   }),
//   new MiniCssExtractPlugin({
//     filename: '[name].css',
//     chunkFilename: '[id].css',
//   }),
// ];
