// base page
// @author MOYAN <moyan@come-future.com>
// @create 2020/09/06 18:16

import React, { useEffect, ReactNode } from 'react';
import { Breadcrumb } from 'antd';
import classNames from 'classnames';
import './index.less';

export interface PageProps extends Record<string, any> {
  /** 文档标题 */
  title?: string;
  /** 面包屑 */
  breadcrumb?: ReactNode[];
  /** class name */
  className?: string | string[] | Record<string, boolean>;
}

function RenderBreadcrumb(props: { dataSource: ReactNode[] }) {
  const { dataSource } = props;
  if (!dataSource || !dataSource.length) return null;

  return (
    <Breadcrumb>
      {dataSource.map((item, index) => {
        return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
}

export default function Page(props: PageProps) {
  const { title, breadcrumb, className, children, ...others } = props;

  useEffect(() => {
    let prevTitle: string;
    if (props.title) {
      prevTitle = document.title;
      document.title = props.title;
    }

    return () => {
      if (prevTitle) document.title = prevTitle;
    };
  }, []);

  return (
    <div className="base-page-container">
      <RenderBreadcrumb dataSource={breadcrumb} />
      <div className={classNames('base-page-content', className)} {...others}>
        {children}
      </div>
    </div>
  );
}
