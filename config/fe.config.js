// FE CLI CONFIG
// @author CAIHUAZHI <moyan@come-future.com>
// @create 2020/08/05 17:25
// @see http://npm.cfuture.cc/@cffe/fe-builder-default

module.exports = {
  type: 'tslib',
  builder: '@cffe/fe-builder-default',
  commands: {
    dev: [
      '$ fnpm install',
      '$ npm run dev',
    ],
    build: [
      '$ fnpm install',
      '$ rm -rf ./node_modules/.cache',
      '$ npm run build',
    ],
    publish: [
      '$ echo Hello~~'
    ],
  }
};
