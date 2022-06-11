/*
 * @Author: tcosfish
 * @Date: 2022-05-21 16:01:47
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 12:08:29
 * @FilePath: \vue3admin\src\store\login\login.ts
 */
import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
import coderWhyApi from "@/network";
import MyCache from "../../utils/cache";
import {
  RequestAccountLogin,
  RequestUserInfoById,
  RequestUserMenuById,
} from "../../network/login/index";
import { mapMenuToRouter } from "@/utils/mapMenu";
import router from "@/router";
import { getMenuHandle } from "@/utils/getMenuHandle";

// Module接口的泛型没有默认值, 必传, 一位当前状态模块的 state类型, 二维父状态模块的 state类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true, // 子状态模块可以使用命名空间, 确保命名不冲突
  state() {
    return {
      token: "",
      userInfo: {},
      userMenu: {},
      userMenuHandle: [],
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenu(state, userMenu: any) {
      state.userMenu = userMenu;
      // 注册用户对应的路由
      const routes = mapMenuToRouter(userMenu);
      // console.log(routes)
      // 将 routes 添加到 router 中
      routes.forEach((route) => {
        router.addRoute("Main", route);
      });
    },
    changeUserMenuHandle(state, userMenuHandle: string[]) {
      state.userMenuHandle = userMenuHandle
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      // 由此处来执行请求操作
      console.log("Vuex的login模块中的accountLoginAction方法已被调用...");
      // 1. 获取用户的 token
      const {
        data: { token, id },
      } = await RequestAccountLogin(payload);
      MyCache.setCache("token", token);
      commit("changeToken", token);

      // 2. 根据 ID 请求用户信息
      const userInfoResult = await RequestUserInfoById(id);
      const userInfo = userInfoResult.data;
      commit("changeUserInfo", userInfo);
      MyCache.setCache("userInfo", userInfo);

      // 3. 请求用户菜单
      const userMenuResult = await RequestUserMenuById(userInfo.role.id);
      const userMenu = userMenuResult.data;
      commit("changeUserMenu", userMenu);
      MyCache.setCache("userMenu", userMenu);

      // 4. 获取用户菜单权限
      const userMenuHandle = getMenuHandle(userMenu)
      commit("changeUserMenuHandle", userMenuHandle)

      // 5. 页面跳转
      router.push("/main");
    },
    async phoneLoginAction({ commit }, payload: any) {
      const result = await coderWhyApi.request({
        url: "/login",
        method: "POST",
        data: {
          type: "cellphone",
        },
      });
      console.log(result);
    },
    // 页面刷新后就要调用, 保持 localStorage 与 Vuex 一致
    setStorage({ commit }) {
      commit("changeToken", MyCache.getCache("token"));
      commit("changeUserInfo", MyCache.getCache("userInfo"));
      commit("changeUserMenu", MyCache.getCache("userMenu"));
      commit("changeUserMenuHandle", getMenuHandle(MyCache.getCache("userMenu")))
    },
  },
  getters: {},
};

export { loginModule };
