// login layout
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/15 22:23

import React, { lazy } from 'react';
import { Layout } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';
import SuspenseHOC from '@/components/suspense-hoc';
import './index.less';

const LoginPage = SuspenseHOC(lazy(() => import(/* webpackChunkName: "chunk.login" */'@/pages/login')));

export default function LoginLayout() {
  return (
    <div className="login-layout">
      <div className="login-layout-content">
        <LoginPage />
      </div>
      <Layout.Footer style={{ textAlign: 'center', }}>
        Copyright <CopyrightOutlined /> 2020 来未来科技
      </Layout.Footer>
    </div>
  );
}
