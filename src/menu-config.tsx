// 导航配置
// @author MOYAN <moyan@come-future.com>
// @create 2020/09/01 15:24

import React, { useEffect, useState } from 'react';
import { HomeFilled, CodeFilled, ToolFilled, GithubOutlined, DashboardOutlined } from '@ant-design/icons';
import { MenuConfigProps } from '@/types/common';
import { menuConfigFormatter } from '@/components/nav-menu/utils';
import { IS_LOCAL } from '@/common/const';
import request from '@/services';

// =====================================================================
// >> 默认的全局导航配置
const globalMenuConfig: MenuConfigProps[] = [
  { title: '我的首页', path: '/', icon: <HomeFilled /> },
  { title: '代码管理', path: '/page/code-manage', icon: <CodeFilled /> },
  // disabled 表示菜单项不可点击
  { title: '功能设置', path: '/page/settings', icon: <ToolFilled />, disabled: true },
  // href 表示外链， icon 如果是一个链接表示直接渲染图片
  { title: '公司官网', href: 'https://come-future.com', icon: 'https://img.alicdn.com/tfs/TB1DZQAhggP7K4jSZFqXXamhVXa-128-128.png' },
];

// >> 默认的左侧导航配置
const appMenuConfig: MenuConfigProps[] = [{
  title: 'Dashboard',
  path: '/dashboard',
  icon: <DashboardOutlined />,
}, {
  title: '活动管理',
  key: 'activity',
  icon: 'icon-activity', // 字符串会渲染 CustomIcon，见 components/custom-icon
  children: [
    { title: '子菜单一', path: '/page/activity/page1' },
    { title: '子菜单二', path: '/page/activity/page2' },
  ]
}, {
  title: '能力模型',
  key: 'ability',
  icon: 'icon-ability',
  children: [
    { title: '能力模型一', path: '/page/ability/page1' },
    { title: '能力模型二', path: '/page/ability/page2' },
  ]
}, {
  title: '示例页面',
  key: 'example',
  // hidden 表示菜单隐藏，IS_LOCAL 表示是否是本地开发环境
  // hidden: !IS_LOCAL,
  icon: <GithubOutlined />,
  children: [
    { title: '示例表单页', path: '/page/example/form' },
    { title: '示例列表页', path: '/page/example/list' },
  ]
}];

// =====================================================================

// 全局导航菜单配置 hook
export function useGlobalMenuConfig(): [MenuConfigProps[], boolean] {
  const [config, setConfig] = useState<MenuConfigProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    // 1. 实际项目中请换成真实接口
    // 2. 如果项目中的菜单不是动态获取的，请删除此逻辑，直接 setConfig
    request('https://httpbin.org/get', {
      method: 'GET',
      data: { menuType: 'global' },
      showError: '全局菜单配置获取失败！',
    }).then(result => {
      // setConfig(menuConfigFormatter(result.data || []));
      setConfig(menuConfigFormatter(globalMenuConfig));
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return [config, loading];
}

// 左侧导航菜单配置 hook
export function useMenuConfig(): [MenuConfigProps[], boolean] {
  const [config, setConfig] = useState<MenuConfigProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // 1. 实际项目中请换成真实接口
    // 2. 如果项目中的菜单不是动态获取的，请删除此逻辑，直接 setConfig
    request('https://httpbin.org/get', {
      method: 'GET',
      data: { menuType: 'slider' },
      showError: '导航菜单加载失败！',
    }).then(result => {
      // setConfig(menuConfigFormatter(result.data || []));
      setConfig(menuConfigFormatter(appMenuConfig));
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return [config, loading];
}
