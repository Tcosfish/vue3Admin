/*
 * @Author: tcosfish
 * @Date: 2022-06-07 20:48:29
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-07 20:51:43
 * @FilePath: \vue3admin\src\global\index.ts
 */

import { App } from "vue";

import registerProperty from "./registerProperty";

export function globalRegister(app: App): void {
  app.use(registerProperty);
}
