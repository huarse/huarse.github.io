// loading message
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/23 17:23

import { Context } from '@irim/saber/types/interfaces';
import { message } from 'antd';

export default async function loadingMessage(ctx: Context) {
  if (ctx.showLoading) {
    message.loading({
      content: typeof ctx.showLoading === 'string' ? ctx.showLoading : '加载中...',
      duration: 0,
    });
  }

  try {
    await ctx.next();
    ctx.showLoading && message.destroy();
  } catch (ex) {
    ctx.showLoading && message.destroy();
    throw ex;
  }
}
