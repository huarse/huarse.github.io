// webpack config
// @author Pluto <huarse@gmail.com>
// @create 2018/05/22

const path = require('path');
const chalk = require('chalk');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { externalMap, prodScriptsInjection, prodStyleInjection } = require('./webpack.external');
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const cwd = process.cwd();

module.exports = {
  mode: 'production',
  entry: {
    index: ['./src/index'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(cwd, 'build'),
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    publicPath: 'build/', // https://come2f-web.oss-cn-hangzhou.aliyuncs.com/huarse/huarse.github.io/
  },
  externals: externalMap,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  devtool: 'false',
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
        loader: 'sass-loader',
      }],
    }, {
      test: /\.less$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../'
        },
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
      test: /\.svg$/,
      loader: 'svg-url-loader',
      options: {
        limit: 10000,
      },
    }, {
      test: /\.(png|jpe?g|gif)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'imgs/[name].[hash:8].[ext]',
      },
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[hash:8].[ext]',
      },
    }]
  },
  plugins: [
    new HardSourceWebpackPlugin(), // 影响不大
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: '../index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      templateParameters: {
        injectScripts: prodScriptsInjection,
        injectStyles: prodStyleInjection,
      },
      inlineSource: 'runtime~.+\\.js',
    }),
    // new HtmlWebpackInlineSourcePlugin(),
    new OptimizeCSSAssetsPlugin(),
    new ManifestPlugin(),
    new ProgressBarPlugin({
      total: 100,
      format: '> webpack building [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false,
      summaryContent: false
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        // TODO remove console.log
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'vendor-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial',
        },
      },
    },
    runtimeChunk: true,
    concatenateModules: true,
  },
  performance: {
    hints: false,
  },
};
