// base layout header
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/15 22:57

import React from 'react';
import { Menu, Dropdown, Avatar, Typography } from 'antd';
import { UserOutlined, LogoutOutlined, LoginOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { LOGIN_INFO } from '@/common/const';
import GlobalMenu from './global-menu';
import './index.less';

function LoginMenu() {
  const isLogin = !!LOGIN_INFO.userName;

  return (
    <Menu>
      <Menu.Item icon={<UserOutlined />}>
        <span>{isLogin ? LOGIN_INFO.nickName : <Typography.Text disabled>未登录用户</Typography.Text>}</span>
      </Menu.Item>
      <Menu.Item icon={isLogin ? <LogoutOutlined /> : <LoginOutlined />}>
        <a href="/login">{isLogin ? '重新登录' : '立即登录'}</a>
      </Menu.Item>
    </Menu>
  );
}

function FuncMenu() {
  return (
    <Menu style={{ width: 120 }}>
      <Menu.Item>菜单一</Menu.Item>
      <Menu.Item>菜单二</Menu.Item>
      <Menu.Item>菜单三</Menu.Item>
    </Menu>
  );
}

export default function LayoutHeader() {
  return (
    <header className="base-layout-header">
      <GlobalMenu />
      <div className="app-brand">
        <div className="brand-logo">
          <img src="https://img.alicdn.com/tfs/TB13x2pTET1gK0jSZFrXXcNCXXa-200-200.jpg" alt=""/>
        </div>
        <Link to="/">HUAZHI.ME</Link>
      </div>
      <span className="header-deivider"></span>
      <s className="flex-air"></s>
      <Dropdown overlay={FuncMenu()} placement="bottomRight">
        <span className="header-menu-trigger">功能菜单</span>
      </Dropdown>
      <span className="header-deivider"></span>
      <Dropdown overlay={LoginMenu()} placement="bottomRight">
        <Avatar shape="circle" src={LOGIN_INFO.avatarUrl || 'https://img.alicdn.com/tfs/TB1YTUYd4vbeK8jSZPfXXariXXa-320-320.jpg'} />
      </Dropdown>
    </header>
  );
}
