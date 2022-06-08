/*
 * @Author: tcosfish
 * @Date: 2022-06-07 13:35:01
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-08 12:32:21
 * @FilePath: \vue3admin\src\store\main\system\types.ts
 */

export interface ISystemState {
  userList: any[];
  roleList: any[];
  menuList: any[];
  departmentList: any[];
  roleCount: number;
  userCount: number;
  menuCount: number;
  departmentCount: number;
}
