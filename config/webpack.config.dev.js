// webpack config
// @author Pluto <huarse@gmail.com>
// @create 2018/05/22

const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { externalMap, devPublicPath, devScriptsInjection, devStyleInjection } = require('./webpack.external');

const cwd = process.cwd();
const { BUILD_DEST = 'build' } = process.env;

module.exports = {
  mode: 'development',
  entry: {
    index: ['./src/index'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(cwd, BUILD_DEST),
    chunkFilename: 'js/[name].chunk.js',
    publicPath: devPublicPath,
  },
  externals: externalMap,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve('src'),
    },
  },

  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [{
      test: /\.(j|t)sx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          configFile: path.resolve(cwd, 'babel.config.js'),
          cacheDirectory: true,
        },
      }, {
        loader: 'eslint-loader',
      }],
    }, {
      test: /\.(sass|scss)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          // importLoaders: 2,
          modules: {
            mode: 'global',
            localIdentName: '[local]-[hash:base64:5]',
          }
        },
      }, {
        loader: 'postcss-loader',
        options: require('./postcss.config'),
      }, {
        loader: 'sass-loader'
      }],
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          // importLoaders: 2,
          modules: {
            mode: 'global',
            localIdentName: '[local]-[hash:base64:5]',
          }
        },
      }, {
        loader: 'postcss-loader',
        options: require('./postcss.config'),
      }, {
          loader: 'less-loader',
          options: require('./less.config'),
      }]
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'imgs/[name].[ext]',
      },
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]',
      },
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      templateParameters: {
        injectScripts: devScriptsInjection,
        injectStyles: devStyleInjection,
      },
    }),
    new ProgressBarPlugin({
      total: 100,
      format: '> start server [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false,
      summaryContent: false
    }),
  ],
};
