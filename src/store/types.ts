/*
 * @Author: tcosfish
 * @Date: 2022-05-21 16:06:35
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-12 16:07:05
 * @FilePath: \vue3admin\src\store\types.ts
 */

import { ILoginState } from "./login/types";
import { ISystemState } from "./main/system/types";

export interface IRootState {
  name: string;
  age: number;
  entireDepartment: any[];
  entireRole: any[];
}

export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
}

export type IStoreType = IRootState & IRootWithModule;
