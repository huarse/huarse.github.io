// start script
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/14 11:10

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const devConfig = require('../config/webpack.config.dev');

const PORT = +process.env.PORT || 8802;

process.on('unhandledRejection', err => {
  // 事件监听....
  throw err;
});

const options = {
  // historyApiFallback: false,
  historyApiFallback: {
    rewrites: [{ from: /./, to: '/index.html' }]
  },
  port: PORT,
  hot: true,
  host: '0.0.0.0',
  open: true,
  openPage: `http://127.0.0.1:${PORT}`,
  disableHostCheck: true,
  overlay: {
    warnings: false,
    errors: true,
  },
  proxy: {
    '/api': {
      target: `http://127.0.0.1:3000/`,
      // pathRewrite: { '/api': '/apixxx' },
      changeOrigin: true,
      secure: true,
    }
  },
};

webpackDevServer.addDevServerEntrypoints(devConfig, options);
const compiler = webpack(devConfig);
const server = new webpackDevServer(compiler, options);

server.listen(PORT, '127.0.0.1', () => {
  console.log(`dev server listening on ${PORT}`);
});
