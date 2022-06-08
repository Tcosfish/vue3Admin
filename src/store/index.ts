/*
 * @Author: tcosfish
 * @Date: 2022-05-09 17:46:51
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-07 13:38:25
 * @FilePath: \vue3admin\src\store\index.ts
 */
import { createStore } from "vuex";
import { IRootState } from "./types";

import { loginModule } from "./login/login";
import { systemModule } from "./main/system/system";

// 记得指定类型
export default createStore<IRootState>({
  state: () => {
    return {
      name: "Tcosfish",
      age: 18,
    };
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule,
    systemModule,
  },
});
