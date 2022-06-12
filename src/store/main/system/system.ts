/*
 * @Author: tcosfish
 * @Date: 2022-06-07 13:33:55
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-12 18:08:59
 * @FilePath: \vue3admin\src\store\main\system\system.ts
 */
import {
  deleteListData,
  getPageListData,
  createPageData,
  editPageData,
} from "@/network/main/system/system";
import { IRootState } from "@/store/types";
import { Module } from "vuex";

import { ISystemState } from "./types";

// 配置 PageName 对应的 PageURl
const pageUrlMap = new Map([
  ["user", "users"],
  ["role", "role"],
  ["department", "department"],
  ["menu", "menu"],
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
      // console.log("pageName: ", payload.pageName);
      // console.log("queryInfo: ", payload.queryInfo);
      // 0. 配置 pageUrl
      const realPageName = pageUrlMap.get(payload.pageName) ?? payload.pageName;
      const pageUrl = `${realPageName}/list`;
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

    async deletePageDataAction(
      context,
      payload: { pageName: string; id: number }
    ) {
      // 拼接 pageUrl
      const { pageName, id } = payload;
      const realPageName = pageUrlMap.get(pageName) ?? "";
      const pageUrl = `/${realPageName}/${id}`;
      console.log(pageUrl);
      // 执行删除操作
      await deleteListData(pageUrl);
      // 重新获取最新的数据
      context.dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },

    async createPageDataAction(
      { dispatch },
      payload: { pageName: string; newData: any }
    ) {
      // 1. 发送请求
      const { pageName, newData } = payload;
      const realPageName = pageUrlMap.get(pageName) ?? payload.pageName;
      const pageUrl = `/${realPageName}`;
      await createPageData(pageUrl, newData);
      // 2. 重新获取数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },

    async editPageDataAction(
      { dispatch },
      payload: { pageName: string; editData: any; id: number }
    ) {
      // 1. 发送请求
      const { pageName, editData, id } = payload;
      const realPageName = pageUrlMap.get(pageName) ?? payload.pageName;
      const pageUrl = `/${realPageName}/${id}`;
      console.log(editData);
      await editPageData(pageUrl, editData);
      // 2. 重新获取数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },
  },
};
