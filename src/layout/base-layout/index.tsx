// base layout
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/15 22:26

import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import LayoutHeader from './header';
import LayoutSlider from './slider';
import LayoutFooter from './footer';
import ErrorBoundary from '@/components/error-boundary';
import AppRouter from '@/router';
import './index.less';

export default function BaseLayout() {
  return (
    <Router>
      <div className="base-layout">
        <LayoutHeader />
        <Layout className="base-layout-body">
          <LayoutSlider />
          <Layout className="base-layout-content">
            <ErrorBoundary>
              <AppRouter />
            </ErrorBoundary>
            <LayoutFooter />
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}
