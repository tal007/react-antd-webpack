import axios from 'axios';
import { message } from 'antd';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://rap2.taobao.org:38080/app/mock/162174/';

const pending = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const { CancelToken } = axios;
const removePending = (ever) => {
  for (const p in pending) {
    if (pending[p].u === `${ever.url}&${ever.method}`) {
      // 当当前请求在数组中存在时执行函数体
      pending[p].f(); // 执行取消操作
      pending.splice(p, 1); // 把这条记录从数组中移除
    }
  }
};

axios.interceptors.request.use(
  (config) => {
    removePending(config); // 在一个ajax发送前执行一下取消操作
    config.cancelToken = new CancelToken((c) => {
      // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
      pending.push({ u: `${config.url}&${config.method}`, f: c });
    });
    return config;
  },
  (error) => Promise.reject(error)
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    removePending(response.config);
    return response;
  },
  (error) => {
    const { status } = error.response;

    if (status >= 400 && status < 500) {
      message.info('请求400');
    }
    if (status >= 500) {
      message.info('请求400');
    }

    message.error(error.message);
    Promise.reject(error);
  }
);

export default axios;
