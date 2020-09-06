// 表单示例页
// @author Pluto <huarse@gmail.com>
// @create 2020/06/03 01:23

import React, { useState, useCallback } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import Page from '@/components/base-page';
import { logger } from '@/common/util';
import request from '@/services';
import './index.less';

const { Item: FormItem } = Form;
const GENDER_OPTIONS = [
  { value: 'm', label: '妹子' },
  { value: 'f', label: '汉子' },
];

export default function FormPage() {
  const [form] = Form.useForm();
  const [pending, setPending] = useState(false);

  const handleFinish = useCallback((values: Record<string, any>) => {
    if (pending) return false;
    logger.info('>> handleFinish', values);
    setPending(true);
    request('https://httpbin.org/post', {
      method: 'POST',
      data: values,
      showError: true,
      showLoading: '提交中',
    }).then(() => {
      message.success('数据提交完成！');
    }).finally(() => {
      setPending(false);
    });
  }, [pending]);

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <Page title="表单示例" breadcrumb={['首页', 'Example', '表单示例']}>
      <Form form={form} onFinish={handleFinish}
        labelCol={{ span: 6 }} wrapperCol={{ span: 12 }}
      >
        <FormItem label="用户名" name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="性别" name="gender"
          rules={[{ required: true, message: '请选择性别' }]}
        >
          <Select options={GENDER_OPTIONS} placeholder="请选择" />
        </FormItem>
        <FormItem wrapperCol={{ offset: 6, span: 12 }}>
          <Button htmlType="submit" type="primary" style={{ marginRight: 12 }}>提交</Button>
          <Button htmlType="reset" type="ghost" onClick={handleReset}>重置</Button>
        </FormItem>
      </Form>
    </Page>
  );
}
