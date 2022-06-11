/*
 * @Author: tcosfish
 * @Date: 2022-05-21 16:05:39
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 11:36:11
 * @FilePath: \vue3admin\src\store\login\types.ts
 */

interface ILoginState {
  token: string;
  userInfo: any;
  userMenu: any;
  userMenuHandle: string[];
}

export { ILoginState };
