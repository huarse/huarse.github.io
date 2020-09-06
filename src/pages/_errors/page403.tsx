// 403错误页面
// @author Pluto <huarse@gmail.com>
// @create 2018/05/22

import React from 'react';
import Page from '@/components/base-page';
import './index.less';

export default function Page403() {
  return (
    <Page className="error-page-container">
      {/* <div className="error-page-imgbox">
        <img src="https://img.alicdn.com/tfs/TB1LJAKv5MnBKNjSZFoXXbOSFXa-210-199.svg" alt=""/>
      </div> */}
      <h2>FORBIDDEN</h2>
      <p>对不起，您没有此页面的访问权限</p>
    </Page>
  );
}
