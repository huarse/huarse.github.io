// 分支详情
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/19 23:40

import React, {} from 'react';
import { Card, Carousel } from 'antd';
import './index.less';

export default function HomePage({ history }) {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <Carousel effect="fade" autoplay autoplaySpeed={5000} dotPosition="right">
          <article>
            <div className="carousel-item"
              style={{ backgroundImage: 'url(https://img.alicdn.com/tfs/TB1xGEhgj39YK4jSZPcXXXrUFXa-1920-1200.jpg)' }}
            >
              <div className="item-desc">
                我是描述内容~~~
              </div>
            </div>
          </article>
          <article>
            <div className="carousel-item"
              style={{ backgroundImage: 'url(https://img.alicdn.com/tfs/TB1C.zZOFT7gK0jSZFpXXaTkpXa-1920-1080.jpg)' }}
            >
              <div className="item-desc">
                我是描述内容~~~
              </div>
            </div>
          </article>
          <article>
            <div className="carousel-item"
              style={{ backgroundImage: 'url(https://img.alicdn.com/tfs/TB1NUIggj39YK4jSZPcXXXrUFXa-1920-1200.jpg)' }}
            >
              <div className="item-desc">
                我是描述内容~~~
              </div>
            </div>
          </article>
        </Carousel>
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
