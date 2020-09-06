// APP ENTRY
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/14 10:35

import './styles/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import AppRoot from './layout';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <AppRoot />
  </ConfigProvider>,
  document.getElementById('root'),
);
