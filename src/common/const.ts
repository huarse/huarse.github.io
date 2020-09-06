// 全局通用的静态变量
// @author Pluto <huarse@gmail.com>
// @create 2020/05/27 17:11

/// 项目环境
const host = window.location.host;

/** 当前环境: daily, pre, prod */
export const ENV = /(\d+\.)|dev|daily|test|local|debug|mock|(\d{4,5})/.test(host) ? 'daily' : /pre-/.test(host) ? 'pre' : 'prod';

export const IS_LOCAL = process.env.NODE_ENV === 'development';

window.DEBUG = IS_LOCAL || ENV !== 'prod';

export const LOGIN_INFO = window.loginUser || {} as LoginUser;

/** 键盘 keycode */
export const KEY_CODE = {
  ENTER: 13,
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PAGEUP: 33,
  PAGEDOWN: 34,
  F1: 112,
};
