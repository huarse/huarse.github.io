// 常用工具方法集合
// @author Pluto <huarse@gmail.com>
// @create 2017/03/07

export { logger, random, uuid, isEmpty, serialize, parseJSON } from '@irim/saber';

/**
 * 解析URL search
 * @param str 要解析的字符串
 * @param isDecode  是否 decode
 */
export function parseParam(str = location.search, isDecode = true): Record<string, string> {
  const ary = str.split(/[?&]/);
  const result = {};
  for (let i = 0, j = ary.length; i < j; i++) {
    const n = ary[i];
    if (!n) continue;
    const tmp = n.split('=');
    result[tmp[0]] = (isDecode && !!tmp[1]) ? decodeURIComponent(tmp[1]) : tmp[1];
  }
  return result;
}

/**
 * 解析cookie
 */
export function parseCookie(): Record<string, string> {
  const cookieStr = window.document ? document.cookie : '';
  const cookieAry = cookieStr.split(/\s?;\s?/);
  const cookieMap = {};
  cookieAry.forEach(function (x) {
    const i = x.indexOf('=');
    if (i >= 0) {
      cookieMap[x.substring(0, i)] = x.substring(i + 1);
    }
  });
  return cookieMap;
}

/**
 * 从对象中解析出想要的值
 * @example
 * parseValue({ a: [{ b: 100 }] }, 'a.0.b'); // 100
 */
export function parseValue(obj: Record<string, any>, key: string): any {
  if (!obj) return undefined;

  const keys = key.split('.');
  return keys.reduce((prev, curr) => {
    return prev && prev[curr] || undefined;
  }, obj);
}

let SEED = Math.round(Date.now() * Math.random());

/** 返回一个唯一的key */
export function uniqueKey() {
  return 'CC' + (SEED++).toString(36).toUpperCase();
}

/**
 * 保留几位小数点
 */
export function toFixed(num: number, fix = 2): number {
  const unit = Math.pow(10, fix);
  return Math.round(num * unit) / unit;
}

// 复制文本到剪贴板
export function copy2Clipboard(text: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    input.value = text;
    document.body.appendChild(input);
    input.select();

    document.execCommand('copy') ? resolve(true) : reject(false);
    document.body.removeChild(input);
  });
}

/** 字符串排序，兼容中文排序 */
export function compare4ASCII(a: string, b: string): number {
  if (!a && !b) return 0;
  // if (!isNaN(a) && !isNaN(b)) return a - b;
  if (typeof a === 'number' && typeof b === 'number') return a - b;

  // 没有内容应该放最后
  if (!a) return -1;
  if (!b) return 1;
  if (a === b) return 0;

  const aIsEN = /^[\w\s]+$/.test(a);
  const bIsEN = /^[\w\s]+$/.test(b);

  if (aIsEN && bIsEN) return a > b ? 1 : -1;
  if (aIsEN && !bIsEN) return -1;
  if (!aIsEN && bIsEN) return 1;

  if (String.prototype.localeCompare) {
    return String.prototype.localeCompare.call(a, b, 'zh');
  }

  return a > b ? 1 : -1;
}
