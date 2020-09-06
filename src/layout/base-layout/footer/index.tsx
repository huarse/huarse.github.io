// base layout footer
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/15 23:02

import React, {} from 'react';
import { Layout } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';

export default function LayoutFooter() {
  return (
    <Layout.Footer style={{ textAlign: 'center', }}>
      Copyright <CopyrightOutlined /> 2020 来未来科技
    </Layout.Footer>
  );
}
