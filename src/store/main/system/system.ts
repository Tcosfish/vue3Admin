/*
 * @Author: tcosfish
 * @Date: 2022-06-07 13:33:55
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-08 12:32:32
 * @FilePath: \vue3admin\src\store\main\system\system.ts
 */
import { getPageListData } from "@/network/main/system/system";
import { IRootState } from "@/store/types";
import { Module } from "vuex";

import { ISystemState } from "./types";

// 配置 PageName 对应的 PageURl
const pageUrlMap = new Map([
  ["user", "users/list"],
  ["role", "role/list"],
  ["department", "department/list"],
  ["menu", "menu/list"],
]);

export const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true, // 记得加上命名空间限制才能通过 systemModule/getPageListAction
  state() {
    return {
      userList: [],
      roleList: [],
      menuList: [],
      departmentList: [],
      userCount: 0,
      roleCount: 0,
      menuCount: 0,
      departmentCount: 0,
    };
  },
  mutations: {
    changeCount(state, payload: { pageName: string; newCount: number }) {
      const key = `${payload.pageName}Count`;
      type stateKey = keyof typeof state;
      (state[key as stateKey] as number) = payload.newCount;
    },
    changeList(state, payload: { pageName: string; newList: any[] }) {
      const key = `${payload.pageName}List`;
      type stateKey = keyof typeof state;
      (state[key as stateKey] as any[]) = payload.newList;
    },
  },
  actions: {
    async getPageListAction(
      { commit },
      payload: { pageName: string; queryInfo: any }
    ) {
      // 0. 配置 pageUrl
      const pageUrl = pageUrlMap.get(payload.pageName) ?? "";

      // 1. 发送网络请求获取 List 数据
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);
      const { list, totalCount } = pageResult.data;
      // 2. 将数据保存在 Vuex 中
      commit("changeList", { pageName: payload.pageName, newList: list });
      commit("changeCount", {
        pageName: payload.pageName,
        newCount: totalCount,
      });
    },
  },
};
