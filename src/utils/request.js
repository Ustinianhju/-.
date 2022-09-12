import axios from "axios";
axios.defaults.baseURL = "http://liufusong.top:8080";
axios.defaults.timeout = 8080;

import store from '@/store'
axios.interceptors.request.use(
  function (config) {
    // 每一次发送请求都会执行
    // 登陆了，所有的请求都加上Authorization
    const {
      getters: { isDenglu },
      state: { tokenObj },
    } = store;
    if (isDenglu) {
      config.headers.Authorization = `${tokenObj.token}`;
    }
    return config; // 必须返回config
  },
  function (error) {
    console.log(error);
  }
);
// axios.defaults.headers.common['Authorization'] =
//   localStorage.getItem('HAOKE_ZUFANG')
export default axios;
