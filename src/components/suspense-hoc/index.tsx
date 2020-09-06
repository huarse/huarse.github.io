// suspense boundary
// @author Pluto <huarse@gmail.com>
// @create 2019/02/11

import React, { Suspense } from 'react';
import Loading from '@/components/blank/loading';
import { LOGIN_INFO } from '@/common/const';

export interface SuspenseOptions {
  needLogin?: boolean;
}

export default function SuspenseHOC(Page: (props: any) => JSX.Element, options: SuspenseOptions = {}) {
  return function Inner(props: any) {
    if (options.needLogin && !LOGIN_INFO.userName) {
      location.replace(`/login?redirect=${encodeURIComponent(location.href)}`);
      return <span>跳转登录中……</span>;
    }

    return (
      <Suspense fallback={<Loading noborder />}>
        <Page data-version="1.0.0" {...props} />
      </Suspense>
    );
  };
}
