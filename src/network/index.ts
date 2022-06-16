/*
 * @Author: tcosfish
 * @Date: 2022-05-11 10:35:16
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 12:28:34
 * @FilePath: \vue3admin\src\network\index.ts
 */

import BaseApiInstance from "./request";
import { BASE_URL, BASE_TIMEOUT, IS_SHOW_MESSAGE } from "./config"; // 导入配置
import MyCache from "../utils/cache";

const coderWhyApi = new BaseApiInstance({
  baseURL: BASE_URL,
  timeout: BASE_TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 从 localStorage 中获取 Token, 并让请求携带 Token
      const token = MyCache.getCache("token");
      if (token) {
        if (config.headers) config.headers.Authorization = `Bearer ${token}`;
      }
      // console.log(
      //   "%c 实例的请求成功的拦截!",
      //   "color: green; background: white"
      // );
      return config;
    },
    requestInterceptorsCatch: (err) => {
      console.log("%c请求失败的拦截!", "color: red; background: white");
      return err;
    },
    responseInterceptor: (res) => {
      // console.log(
      //   "%c 实例的响应成功的拦截!",
      //   "color: green; background: white"
      // );
      return res;
    },
    responseInterceptorsCatch: (err) => {
      console.log("%c响应失败的拦截!", "color: red; background: white");
      return err;
    },
  },
  showMessage: IS_SHOW_MESSAGE,
});

export default coderWhyApi;
