// nav menu utils
// @author MOYAN <moyan@come-future.com>
// @create 2020/09/03 01:28

import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuConfigProps } from '@/types/common';
import CustomIcon from '@/components/custom-icon';

// 菜单数据格式化
export const menuConfigFormatter = (configs: any[]) => {
  return configs.map(item => {
    if (/^(https?:)?\/\//.test(item.icon)) {
      item.icon = <img src={item.icon} style={{ maxWidth: 14, maxHeight: 14, marginRight: 10 }} alt=""/>;
    } else if (typeof item.icon === 'string') {
      item.icon = <CustomIcon type={item.icon} style={{ fontSize: 16 }} />;
    }
    if (item.children && item.children.length) {
      item.children = menuConfigFormatter(item.children);
    }
    return item;
  });
};

/** url path 匹配 */
export function matchPath(target: string, current: string, exact = false): boolean {
  if (!target || !current) {
    return false;
  }
  if (target === current) {
    return true;
  }
  // 精确匹配
  if (target === '/' || exact) {
    return current === target;
  }
  // 当前路径比目标路径短（或路径相同，排除相等），一定不匹配
  if (current.length <= target.length) {
    return false;
  }

  const targetList = target.split('/');
  const currentList = current.split('/');
  // 当前路径分段后比目前分段少（或相同），一定不匹配
  if (currentList.length <= targetList.length) {
    return false;
  }

  // 剩下一种情况，就是判断是否当前路径包含目标路径，即 /aaa/bbb 包含 /aaa
  return current.indexOf(target) === 0;
}

export function findSelectedKey(config: MenuConfigProps[], pathname: string, level = 0): string {
  let selectedKey: string = null;

  config.some((item, index) => {
    if (item.children && item.children.length) {
      selectedKey = findSelectedKey(item.children, pathname, level + 1);
      return !!selectedKey;
    }

    const key = item.key || item.path || `lv${level}_${index}`;

    if (item.match && item.match.test(pathname)) {
      selectedKey = key;
      return true;
    } else if (matchPath(item.path, pathname)) {
      selectedKey = key;
      return true;
    }

  });

  return selectedKey;
}

// ===============================================================================\
export function renderMenuNode(item: MenuConfigProps, props: Record<string, any>) {
  const menuNode = item.path ?
    <Link to={item.path}>{item.title}</Link> :
    item.href ? <a href={item.href} target={item.target || '_blank'}>{item.title}</a> :
      <span>{item.title}</span>;

  return (
    <Menu.Item
      {...props}
      icon={item.icon}
      disabled={item.disabled || false}
      onClick={() => props.onClick(item)}
    >{menuNode}
    </Menu.Item>
  );
}
