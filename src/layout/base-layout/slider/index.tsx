// layout slider
// @author MOYAN <moyan@come-future.com>
// @create 2020/09/02 01:15

import React, { useState } from 'react';
import { Layout, Spin } from 'antd';
import { useMenuConfig } from '@/menu-config';
import { NavMenu } from '@/components/nav-menu';
import './index.less';

export default function LayoutSlider() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [config, loading] = useMenuConfig();

  if (loading) {
    return (
      <Layout.Sider width={240} theme="light">
        <div className="app-slider-indicator">
          <Spin tip="菜单加载中…" />
        </div>
      </Layout.Sider>
    );
  }

  return (
    <Layout.Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(flag) => setCollapsed(flag)}
      width={240}
    >
      <NavMenu config={config} mode="inline" theme="light" />
    </Layout.Sider>
  );
}
