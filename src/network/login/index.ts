/*
 * @Author: tcosfish
 * @Date: 2022-05-22 17:27:14
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-31 16:15:42
 * @FilePath: \vue3admin\src\network\login\index.ts
 */

import coderWhyApi from "../index";

enum RequestApi {
  accountLogin = "/login",
  loginUserInfo = "users/",
  loginUserMenu = "/role/",
  userList = "/users/list",
}

function RequestAccountLogin(payload: any) {
  return coderWhyApi.request({
    url: RequestApi.accountLogin,
    method: "post",
    data: {
      name: payload.account,
      password: payload.password,
    },
  });
}

function RequestUserInfoById(id: number) {
  return coderWhyApi.request({
    url: RequestApi.loginUserInfo + id,
    method: "get",
  });
}

function RequestUserMenuById(id: number) {
  return coderWhyApi.request({
    url: RequestApi.loginUserMenu + id + "/menu",
    method: "get",
  });
}

export { RequestAccountLogin, RequestUserInfoById, RequestUserMenuById };
