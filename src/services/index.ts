// rda service
// @author Pluto <huarse@gmail.com>
// @create 2018/08/09

import Saber from '@irim/saber';
import optionsFilling from './middlewares/option-filling';
import errorHandler from './middlewares/error-handler';
import loadingMessage from './middlewares/loading-message';

interface ExternalContext {
  /** 是否显示加载中 */
  showLoading: boolean | string;
  /** 是否显示错误信息 */
  showError: boolean | string;
  /** 是否在出错时仍然正确返回 */
  ignoreError: boolean;
}

const saber = Saber.singleton<ExternalContext>();

saber.use(errorHandler);
saber.use(optionsFilling);
saber.use(loadingMessage);

saber.request = saber.request.bind(saber);

export { saber };

export default saber.request;
