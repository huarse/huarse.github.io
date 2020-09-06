// 分支详情
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/19 23:40

import React, {} from 'react';
import { Card } from 'antd';
import './index.less';

export default function HomePage({ history }) {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <h1>Hello, World</h1>
      </div>

      <section className="home-page-section">
        <h2>我是标题</h2>
        <div className="card-list">
          <Card hoverable onClick={() => history.push('/page/example/form')}
            cover={<img src="https://img.alicdn.com/tfs/TB1xi_4OQT2gK0jSZFkXXcIQFXa-2560-1600.jpg" alt=""/>}>
            <Card.Meta title="表单示例页面" description="tsx + hook 方式的例子" />
          </Card>
          <Card hoverable onClick={() => history.push('/page/example/list')}
            cover={<img src="https://img.alicdn.com/tfs/TB1vNH0OUY1gK0jSZFCXXcwqXXa-2560-1600.jpg" alt=""/>}>
            <Card.Meta title="列表示例页面" description="jsx + class component 方式的例子" />
          </Card>
          <Card hoverable onClick={() => history.push('/page/fruits/orange')}
            cover={<img src="https://img.alicdn.com/tfs/TB1NUIggj39YK4jSZPcXXXrUFXa-1920-1200.jpg" alt=""/>}>
            <Card.Meta title="点击时会跳转登录" description="跳转登录在 router.tsx 中的 SuspenseHOC 方法中控制" />
          </Card>
        </div>
      </section>
    </div>
  );
}
