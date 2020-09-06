// common interfaces
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/19 23:01

import { ReactNode } from 'react';

export type AnyFunction<T = any> = (...args: any) => T;

/** 路由配置 */
export interface RouterConfigItem {
  // title: string;
  path: string;
  component?: (props: any) => JSX.Element;
  /** 是否精确匹配，默认 true */
  exact?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
}

export interface MenuConfigProps {
  title: ReactNode;
  /** 唯一的 key，如果不传，则默认取 path */
  key?: string;
  /** 应用内导航 */
  path?: string;
  /** 外跳链接 */
  href?: string;
  /** [可选] 用于匹配当前路径，默认按 path 匹配 */
  match?: RegExp;
  /** 外跳链接类型，默认是 _blank */
  target?: '_blank' | '_self' | '_top';
  /** 图标，如果传字符串，则表示自定义图标，如果传链接，则表示图片 */
  icon?: JSX.Element | ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否隐藏 */
  hidden?: boolean;
  /** 节节点 */
  children?: Omit<MenuConfigProps, 'icon'>[];
}
