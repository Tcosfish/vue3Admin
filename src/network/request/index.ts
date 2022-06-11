/*
 * @Author: tcosfish
 * @Date: 2022-05-17 21:52:49
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 12:52:08
 * @FilePath: \vue3admin\src\network\request\index.ts
 */

import axios from "axios";
// 导入类型
import type { AxiosInstance } from "axios";
import type { BaseApiInterceptors, BaseApiConfig } from "./type";

// 让 Loading... 出现
import { ElMessage } from "element-plus";
import { IMessageHandle } from "element-plus/lib/el-message/src/types";

class BaseApiInstance {
  instance: AxiosInstance;
  interceptors?: BaseApiInterceptors;
  message?: IMessageHandle;

  constructor(config: BaseApiConfig) {
    this.instance = axios.create(config);
    this.interceptors = config?.interceptors;
    const showMessage = config.showMessage ?? false;

    // 各自实例拦截器的设置
    if (this.interceptors) {
      this.instance.interceptors.request.use(
        this.interceptors?.requestInterceptor,
        this.interceptors?.requestInterceptorsCatch
      );
      this.instance.interceptors.response.use(
        this.interceptors?.responseInterceptor,
        this.interceptors?.responseInterceptorsCatch
      );
    }

    // 该类所有实例拦截器的设置
    this.instance.interceptors.request.use(
      (config) => {
        if (showMessage) {
          this.message = ElMessage({
            type: "info",
            message: "Loading...",
            duration: 0,
          });
        }
        return config;
      },
      (err) => err
    );
    this.instance.interceptors.response.use(
      (res) => {
        if (res.status === 200) {
          if (showMessage) {
            setTimeout(() => {
              this.message?.close();
              ElMessage({
                type: "success",
                message: "加载成功",
                showClose: true,
              });
            }, 2000);
          }
        }
        return res.data;
      },
      (err) => err
    );
  }

  request(config: BaseApiConfig) {
    // 请求拦截的本质就是劫持配置从输入到发挥作用的过程
    if (config.interceptors?.requestInterceptor) {
      // 这里通过传入的配置中可能存在的 requestInterceptor() 对配置进行了处理并返回
      config = config.interceptors.requestInterceptor(config);
    }

    // 相对的, 响应拦截的本质就是劫持 then()的 res参数
    return this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        // 这里我们也用设置的 responseInterceptor() 对响应结果进行处理
        config.interceptors.responseInterceptor(res);
      }
      return res;
    });
  }
}

export default BaseApiInstance;
