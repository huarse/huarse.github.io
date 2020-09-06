// 列表页
// @author MOYAN <moyan@come-future.com>
// @create 2020/09/03 01:51
// 此页面使用 jsx + class component 编写，仅作为示例

import React, { Component } from 'react';
import { Table, Form, Button, Input, Select, DatePicker } from 'antd';
import request from '@/services';
import Page from '@/components/base-page';
import './index.less';

const { Item: FormItem } = Form;

export default class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageIndex: 1,
      totalCount: 0,
      pageSize: 20,
      pending: false,

      genderOptons: [
        { value: 'm', label: '男' },
        { value: 'f', label: '女' },
      ],

      listData: [],
    };
  }

  componentDidMount() {
    this.queryListData();
  }

  queryListData(pageIndex = this.state.pageIndex) {
    const { username, gender, birth } = this.formField.getFieldsValue();
    const params = {
      username,
      gender,
      pageIndex,
      pageSize: this.state.pageSize,
    };

    if (birth && birth[1]) {
      params.birthStart = birth[0].format('YYYY-MM-DD');
      params.birthEnd = birth[1].format('YYYY-MM-DD');
    }

    this.setState({ pending: true });
    request('/mock/api.list.json', {
      method: 'GET',
      data: params,
      showLoading: true,
      showError: true,
      // showError: '数据请求失败！',
    }).then((result) => {
      const { total, list } = result.data;

      this.setState({
        totalCount: total,
        listData: list || [],
      });
    }).finally(() => {
      this.setState({ pending: false });
    });
  }

  handleSearch = (values) => {
    this.setState({ pageIndex: 1 });
    this.queryListData(1);
  }

  handleReset = () => {
    this.formField.resetFields();
  }

  handlePageChange = (pageIndex, pageSize) => {
    this.setState({ pageIndex, pageSize }, () => {
      this.queryListData();
    });
  }

  renderSearchField() {
    return (
      <Form form={this.formField} layout="inline"
        ref={ins => this.formField = ins}
        onFinish={this.handleSearch} onReset={this.handleReset}>
        <FormItem name="username" label="用户名">
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem name="gender" label="性别">
          <Select options={this.state.genderOptons} placeholder="请选择" style={{ width: 160 }} />
        </FormItem>
        <FormItem name="birth" label="出生日期">
          <DatePicker.RangePicker />
        </FormItem>
        <FormItem>
          <Button htmlType="submit" type="primary" style={{ marginRight: 12 }}>查询</Button>
          <Button htmlType="reset" type="default">重置</Button>
        </FormItem>
      </Form>
    );
  }

  renderCaption() {
    return (
      <div className="page-caption">
        <div className="caption-left">
          共 {this.state.totalCount} 条数据
        </div>
        <div className="caption-right">
          <Button type="primary">添加</Button>
        </div>
      </div>
    );
  }

  renderTable() {
    const { listData, pending, pageIndex, pageSize, totalCount } = this.state;

    return (
      <Table
        size="small"
        rowKey="id"
        bordered
        dataSource={listData}
        loading={pending}
        pagination={{
          current: pageIndex, total: totalCount, pageSize: pageSize,
          onChange: this.handlePageChange,
        }}
        scroll={{ y: window.innerHeight - 420 }}
      >
        <Table.Column dataIndex="id" title="编号" />
        <Table.Column dataIndex="name" title="姓名" />
        <Table.Column dataIndex="gender" title="性别" />
        <Table.Column dataIndex="birth" title="生日" />
        <Table.Column title="操作" width={160} render={this.renderActionCell} />
      </Table>
    );
  }

  renderActionCell = (value, record, index) => {
    return (
      <div className="table-action-cell">
        <Button type="text">删除</Button>
        <Button type="text">编辑</Button>
      </div>
    );
  }

  render() {
    return (
      <Page title="列表示例" className="list-page-container" breadcrumb={['首页', 'Example', '列表示例']}>
        {this.renderSearchField()}
        <hr />
        {this.renderCaption()}
        {this.renderTable()}
      </Page>
    );
  }
}
