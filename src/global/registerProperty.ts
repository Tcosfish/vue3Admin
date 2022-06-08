/*
 * @Author: tcosfish
 * @Date: 2022-06-07 20:48:40
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-07 20:57:48
 * @FilePath: \vue3admin\src\global\registerProperty.ts
 */

import { App } from "vue";

import formatTimeUTC from "@/utils/formatTime";

export default function registerProperty(app: App) {
  // 命名习惯, 全局变量前加个 $ 符号
  app.config.globalProperties.$filters = {
    formatTimeUTC,
  };
}
