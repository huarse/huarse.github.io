// webpack external files
// @author CAIHUAZHI <moyan@come-future.com>
// @create 2020/08/30 20:45

function renderScriptHTML(src) {
  return `<script src="${src}" charset="utf-8"></script>`;
}
function renderStyleHTML(src) {
  return `<link rel="stylesheet" href="${src}">`;
}

exports.externalMap = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'moment': 'moment',
  'antd': 'antd',
};

// =============== development 相关配置 ===============
exports.devPublicPath = '/';

// 开发阶段注入到 HTML 的额外内容，见 webpack.config.dev.js
exports.devScriptsInjection = [
  renderScriptHTML(`${this.devPublicPath}node_modules/react/umd/react.development.js`),
  renderScriptHTML(`${this.devPublicPath}node_modules/react-dom/umd/react-dom.development.js`),
  renderScriptHTML(`${this.devPublicPath}node_modules/moment/min/moment.min.js`),
  renderScriptHTML(`${this.devPublicPath}node_modules/moment/locale/zh-cn.js`),
  renderScriptHTML(`${this.devPublicPath}node_modules/antd/dist/antd.js`),
].join('\n');

exports.devStyleInjection = [
  renderStyleHTML(`${this.devPublicPath}node_modules/antd/dist/antd.css`),
].join('\n');


// =============== production 相关配置 ===============
// exports.prodPublicPath = 'https://come2f-web.oss-cn-hangzhou.aliyuncs.com/_IRIM_GIT_GROUP_/_IRIM_PROJECT_NAME_/';
exports.prodPublicPath = 'build/';

// 打包时需要复制到 build 目录的文件
exports.prodSourceCopy = [{
  source: 'node_modules/react/umd/react.production.min.js',
  target: 'js/react.min.js',
}, {
  source: 'node_modules/react-dom/umd/react-dom.production.min.js',
  target: 'js/react-dom.min.js',
}, {
  source: 'node_modules/moment/min/moment.min.js',
  target: 'js/moment.min.js',
}, {
  source: 'node_modules/moment/locale/zh-cn.js',
  target: 'js/moment.locale.zh-cn.js',
}, {
  source: 'node_modules/antd/dist/antd.min.js',
  target: 'js/antd.min.js',
}, {
  source: 'node_modules/antd/dist/antd.min.css',
  target: 'css/antd.min.css',
}];

// 打包时注入到 HTML 的额外内容，见 webpack.config.prod.js
exports.prodScriptsInjection = [
  renderScriptHTML(`${this.prodPublicPath}js/react.min.js`),
  renderScriptHTML(`${this.prodPublicPath}js/react-dom.min.js`),
  renderScriptHTML(`${this.prodPublicPath}js/moment.min.js`),
  renderScriptHTML(`${this.prodPublicPath}js/moment.locale.zh-cn.js`),
  renderScriptHTML(`${this.prodPublicPath}js/antd.min.js`),
].join('\n');

exports.prodStyleInjection = [
  renderStyleHTML(`${this.prodPublicPath}css/antd.min.css`),
].join('\n');
