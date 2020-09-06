// 导航菜单
// @author MOYAN <moyan@come-future.com>
// @create 2020/09/03 00:26

import React from 'react';
import { Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu/index';
import { useLocation } from 'react-router-dom';
import { MenuConfigProps, AnyFunction } from '@/types/common';
import { renderMenuNode, findSelectedKey } from './utils';

const { SubMenu } = Menu;

export interface NavMenuItemProps extends MenuProps {
  onClick?: AnyFunction;
  config: MenuConfigProps[];
  // exactMatch?: boolean;
}

/** 导航菜单渲染 */
export function NavMenu(props: NavMenuItemProps) {
  const { onClick = () => null, config, ...others } = props;
  const { pathname } = useLocation();

  const selectedKey = findSelectedKey(config, pathname, 0);

  return (
    <Menu selectedKeys={[selectedKey]} {...others}>
      {config.map((item, index) => {
        if (item.hidden) return null;

        if (item.children && item.children.length) {
          return (
            <SubMenu
              key={item.key || item.path || index}
              icon={item.icon}
              title={item.title}
            >
              {item.children.map((subItem, subIndex) => {
                if (subItem.hidden) return null;

                return renderMenuNode(subItem, {
                  key: subItem.key || subItem.path || `lv1_${subIndex}`,
                  onClick: () => onClick(subItem),
                });
              })}
            </SubMenu>
          );
        }

        return renderMenuNode(item, {
          key: item.key || item.path || `lv0_${index}`,
          icon: item.icon,
          onClick: () => onClick(item),
        });
      })}
    </Menu>
  );
}
