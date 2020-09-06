// 全局导航
// @author MOYAN <moyan@come-future.com>
// @create 2020/09/02 00:34

import React, { useState } from 'react';
import { Drawer, Spin } from 'antd';
import CustomIcon from '@/components/custom-icon';
import { useGlobalMenuConfig } from '@/menu-config';
import { NavMenu } from '@/components/nav-menu';

export default function GlobalMenu() {
  const [visible, setVisible] = useState<boolean>(false);
  const [config, loading] = useGlobalMenuConfig();

  if (loading) {
    return <Spin className="nav-toggle" />;
  }
  if (!config.length) return null;

  return (
    <>
      <div className="nav-toggle" onClick={() => setVisible(true)}>
        <CustomIcon type="icon-menu-dots" style={{ fontSize: 20 }} />
      </div>
      <Drawer
        className="global-nav-menu"
        title="全局导航"
        placement="left"
        width={240}
        closable
        onClose={() => setVisible(false)}
        visible={visible}>
        <NavMenu config={config} onClick={() => setVisible(false)} />
      </Drawer>
    </>
  );
}
