// webpack external files
// @author MOYAN <moyan@come-future.com>
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

exports.prodSourceCopy = [{
  source: 'node_modules/react/umd/react.production.min.js',
  target: 'js/react.min.js',
}, {
  source: 'node_modules/react-dom/umd/react-dom.production.min.js',
  target: 'js/react-dom.min.js',
}, {
  source: 'node_modules/antd/dist/antd.min.js',
  target: 'js/antd.min.js',
}, {
  source: 'node_modules/antd/dist/antd.min.css',
  target: 'css/antd.min.css',
}];

exports.devScriptsInjection = [
  renderScriptHTML('/node_modules/react/umd/react.development.js'),
  renderScriptHTML('/node_modules/react-dom/umd/react-dom.development.js'),
  renderScriptHTML('https://g.alicdn.com/code/lib/moment.js/2.27.0/??moment.min.js,locale/zh-cn.js'),
  renderScriptHTML('/node_modules/antd/dist/antd.js'),
].join('\n');

exports.devStyleInjection = [
  renderStyleHTML('/node_modules/antd/dist/antd.css'),
].join('\n');

exports.prodScriptsInjection = [
  renderScriptHTML('build/' + this.prodSourceCopy[0].target),
  renderScriptHTML('build/' + this.prodSourceCopy[1].target),
  renderScriptHTML('https://g.alicdn.com/code/lib/moment.js/2.27.0/??moment.min.js,locale/zh-cn.js'),
  renderScriptHTML('build/' + this.prodSourceCopy[2].target),
].join('\n');

exports.prodStyleInjection = [
  renderStyleHTML('build/' + this.prodSourceCopy[3].target),
].join('\n');
