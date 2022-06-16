/*
 * @Author: tcosfish
 * @Date: 2022-05-21 16:06:35
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 12:22:00
 * @FilePath: \vue3admin\src\store\types.ts
 */

import { ILoginState } from "./login/types";
import { ISystemState } from "./main/system/types";
import { IAnalysisState } from "./main/analysis/types";

export interface IRootState {
  name: string;
  age: number;
  entireDepartment: any[];
  entireRole: any[];
  entireMenu: any[];
}

export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
  analysis: IAnalysisState;
}

export type IStoreType = IRootState & IRootWithModule;
