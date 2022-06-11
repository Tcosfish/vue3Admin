/*
 * @Author: tcosfish
 * @Date: 2022-05-18 15:14:07
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 13:06:53
 * @FilePath: \vue3admin\src\network\request\type.ts
 */

import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface BaseApiInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  responseInterceptor?: (value: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}

export interface BaseApiConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: BaseApiInterceptors<T>;
  showMessage?: boolean;
}
