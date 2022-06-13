/*
 * @Author: tcosfish
 * @Date: 2022-05-09 17:46:51
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-13 14:20:01
 * @FilePath: \vue3admin\src\store\index.ts
 */
import { createStore } from "vuex";
import { IRootState } from "./types";

import { loginModule } from "./login/login";
import { systemModule } from "./main/system/system";
import { getPageListData_plus } from "@/network/main/system/system";

// 记得指定类型
export default createStore<IRootState>({
  state: () => {
    return {
      name: "Tcosfish",
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: [],
    };
  },
  mutations: {
    changeEntireDepartment(state, entireDepartment: any[]) {
      state.entireDepartment = entireDepartment;
    },
    changeEntireRole(state, entireRole: any[]) {
      state.entireRole = entireRole;
    },
    changeEntireMenu(state, entireMenu: any[]) {
      state.entireMenu = entireMenu;
    },
  },
  actions: {
    async getInitialData({ commit }) {
      // 请求部门和角色
      const {
        data: { list: departmentList },
      } = await getPageListData_plus("/department/list", {
        offset: 0,
        size: 1000,
      });
      const {
        data: { list: roleList },
      } = await getPageListData_plus("/role/list", {
        offset: 0,
        size: 1000,
      });
      const menuResult = await getPageListData_plus("/menu/list", {});
      const { list: menuList } = menuResult.data;
      // 保存数据
      commit("changeEntireDepartment", departmentList);
      commit("changeEntireRole", roleList);
      commit("changeEntireMenu", menuList);
    },
  },
  modules: {
    loginModule,
    systemModule,
  },
});
