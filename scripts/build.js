// 线上构建脚本
// @author Pluto <huarse@gmail.com>
// @create 2020/06/01 00:01

const fs = require('fs-extra');
const path = require('path');
const webapck = require('webpack');
const chalk = require('chalk');
const { print } = require('@irim/bin-tool');
const prodConfig = require('../config/webpack.config.prod');
const { prodSourceCopy } = require('../config/webpack.external');

const WORKSPACE = process.cwd();
const { ANALYZE, BUILD_DIST = 'build' } = process.env;

process.on('unhandledRejection', err => {
  console.error('unhandledRejection: ', err);
  throw err;
});

if (ANALYZE) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  prodConfig.plugins.push(new BundleAnalyzerPlugin());
}

const start = Date.now();
webapck(prodConfig, (err, stats) => {
  console.log(chalk.green(`webpack build completed! cost ${(Date.now() - start) / 1000}s`));

  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.log(chalk.red('\n------------------ ERROR ------------------'));
    process.stdout.write(info.errors.join('\n') + '\n');
  }

  if (stats.hasWarnings()) {
    console.log(chalk.yellow('\n------------------ WARNING ------------------'));
    process.stdout.write(info.warnings.join('\n') + '\n');
  }

  console.log(chalk.green('\n------------------ RESULTS ------------------'));
  process.stdout.write(info.assets.map(n => `${chalk.gray('>')} ${chalk.green(n.name)} ${chalk.yellow(Math.round(n.size * 100 / 1024) / 100 + 'K')}`).join('\n') + '\n');

  if (ANALYZE) return;

  // >> 复制文件
  print('debug', '复制 external 文件...');
  fs.ensureDirSync(path.resolve(WORKSPACE, BUILD_DIST));
  fs.ensureDirSync(path.resolve(WORKSPACE, BUILD_DIST, 'js'));
  fs.ensureDirSync(path.resolve(WORKSPACE, BUILD_DIST, 'css'));

  prodSourceCopy.forEach(item => {
    fs.copyFileSync(
      path.resolve(WORKSPACE, item.source),
      path.resolve(WORKSPACE, BUILD_DIST, item.target),
    );
    console.log(`${chalk.gray('>')} ${chalk.green(`${item.source} -> ${item.target}`)}`);
  });

});
