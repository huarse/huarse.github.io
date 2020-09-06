// 500错误页面
// @author Pluto <huarse@gmail.com>
// @create 2018/05/22

import React from 'react';
import Page from '@/components/base-page';
import './index.less';

export default function Page403() {
  return (
    <Page className="error-page-container">
      {/* <div className="error-page-imgbox">
        <img src="https://img.alicdn.com/tfs/TB1TpORv9MmBKNjSZTEXXasKpXa-222-201.svg" alt=""/>
      </div> */}
      <h2>SERVER ERROR</h2>
      <p>服务器出错啦~</p>
    </Page>
  );
}
