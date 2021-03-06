const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SuppressEntryChunksPlugin = require('./libs/SuppressEntryChunksPlugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const cssnano = require('cssnano');

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = {
  name: 'client',
  target: 'web',
  entry: {
    bundle: './src/index.js',
    application: './spectre/style.scss',
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer, precss, cssnano];
              },
            },
          }, {
            loader: 'sass-loader',
          }],
          fallback: 'style-loader',
        }),
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new SuppressEntryChunksPlugin(['application']),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
    }),
    extractSass,
  ],
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
  },
};
