// 页面路由配置
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/19 23:01

import React, { lazy } from 'react';
import SuspenseHOC from '@/components/suspense-hoc';
// import { IS_LOCAL } from '@/common/const';
import { RouterConfigItem } from '@/types/common';
import { Route, Switch } from 'react-router-dom';

export const routerConfig: RouterConfigItem[] = [{
  path: '/page/example/form',
  component: SuspenseHOC(lazy(() => import(/* webpackChunkName: "chunk.example.form" */'@/pages/example/form-page'))),
  // disabled: !IS_LOCAL, // 线上禁用此路由，下同
}, {
  path: '/page/example/list',
  component: SuspenseHOC(lazy(() => import(/* webpackChunkName: "chunk.example.list" */'@/pages/example/list-page'))),
  // disabled: !IS_LOCAL,
}, {
  path: '/404',
  component: SuspenseHOC(lazy(() => import(/* webpackChunkName: "chunk.page404" */'@/pages/_errors/page404'))),
}, {
  path: '/403',
  component: SuspenseHOC(lazy(() => import(/* webpackChunkName: "chunk.page403" */'@/pages/_errors/page403'))),
}, {
  path: '/500',
  component: SuspenseHOC(lazy(() => import(/* webpackChunkName: "chunk.page500" */'@/pages/_errors/page500'))),
}, {
  path: '/',
  component: SuspenseHOC(lazy(() => import(/* webpackChunkName: "chunk.home" */'@/pages/home'))),
}, {
  path: '*',
  component: SuspenseHOC(lazy(() => import(/* webpackChunkName: "chunk.page404" */'@/pages/_errors/page404'))),
  exact: false,
}];

export default function AppRoute() {
  return (
    <Switch>
      {routerConfig.map((item, index) => {
        if (item.disabled) return null;
        item.exact = item.exact !== false;

        return <Route key={index} {...item} />;
      })}
    </Switch>
  );
}
