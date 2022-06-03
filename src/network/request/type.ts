/*
 * @Author: tcosfish
 * @Date: 2022-05-18 15:14:07
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-19 11:20:14
 * @FilePath: \vue3admin\src\network\request\type.ts
 */

import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface BaseApiInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  responseInterceptor?: (value: AxiosResponse) => AxiosResponse;
  responseInterceptorsCatch?: (err: any) => any;
}

export interface BaseApiConfig extends AxiosRequestConfig {
  interceptors?: BaseApiInterceptors;
  showMessage?: boolean;
}
