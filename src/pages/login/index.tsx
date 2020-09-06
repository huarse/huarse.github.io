// login page
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/20 21:54

import * as React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { parseParam } from '@/common/util';
import request from '@/services';
import styles from './index.less';

const FormItem = Form.Item;

export default function LoginPage() {
  const onLogin = ({ username, password }) => {
    message.loading('登录中...');
    request('/api/login', {
      method: 'GET',
      data: {
        username, password,
      },
      showLoading: '登录中...',
      showError: '登录失败！',
    }).then(() => {
      message.success('登录成功');
      setTimeout(() => {
        const redirectURL = parseParam(location.search).redirect;
        location.replace(redirectURL || '/');
      }, 100);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>用户登录</h1>
      </div>
      <Form onFinish={onLogin}>
        <FormItem name="username" rules={[{ required: true, message: '请输入你的用户名!' }]}>
          <Input prefix={<UserOutlined />} placeholder="请输入用户名" size="large" />
        </FormItem>
        <FormItem name="password" rules={[{ required: true, message: '请输入你的密码!' }]}>
          <Input.Password prefix={<LockOutlined />} type="password" placeholder="请输入密码" size="large" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" style={{ width: '100%', }} size="large">登录</Button>
        </FormItem>
      </Form>
    </div>
  );
}
