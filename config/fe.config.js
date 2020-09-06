// FE CLI CONFIG
// @author MOYAN <moyan@come-future.com>
// @create 2020/08/05 17:25

module.exports = {
  type: 'tslib',
  builder: '@cffe/fe-builder-antd',

  devConfig: {
    port: 8866,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/',
        // pathRewrite: { '/api': '/apixxx' },
        changeOrigin: true,
      },
    },



    // plugins: [

    // ],
  },

  // alias: {
  //   'moment': path.resolve(cwd, 'node_modules/dayjs'),
  // },

  // buildConfig: {
  //   plugins: [

  //   ],
  // },
};
