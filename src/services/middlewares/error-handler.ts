// error handler middleware
// @author Pluto <huarse@gmail.com>
// @create 2019/12/18 20:07

import { message } from 'antd';
import { logger } from '@irim/saber';
import { Context } from '@irim/saber/types/interfaces';
import CustomError from '@/common/custom-error';

/**
 * 统一错误处理
 * @param {boolean|string} [ctx.showError=true] 显示错误信息
 * @param {boolean} ctx.ignoreError 忽略错误，并返回
 */
export default async function errorHandler (ctx: Context) {
  try {
    await ctx.next();

    const response = ctx.response || {};

    // 实际项目中要根据具体的情况修改判断的方式
    if (response.success === false) {
      throw new CustomError(ctx.response.message || ctx.response.errMsg, response.errorCode || 'BIZ_ERROR');
    }
  } catch (error) {
    // 自动跳转登录
    // if (error.code === 'NEED_LOGIN') {
    //   location.replace(`/login?redirect=${encodeURIComponent(location.href)}`);
    //   throw error;
    // }

    if (ctx.showError !== false) {
      const displayMessage = typeof ctx.showError === 'string' ? ctx.showError : '';
      message.error(displayMessage || error.message || '请求异常，请稍后再试。');
      logger.error(error.message);
    }

    if (ctx.ignoreError) {
      logger.warn(`ERROR ignored: ${ctx.api}`, error);
      ctx.response = error || {};
    } else {
      throw error;
    }
  }
}
