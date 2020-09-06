// option filling middleware
// @author Pluto <huarse@gmail.com>
// @create 2019/12/18 20:27

import { Context } from '@irim/saber/types/interfaces';

/** add xsrf token add fetch options */
export default async function optionsSupplement (ctx: Context) {
  ctx.serializeOptions = { holdEmpty: true, listHandler: 'TILE' };

  await ctx.next();
}
