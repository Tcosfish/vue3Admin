/*
 * @Author: tcosfish
 * @Date: 2022-06-07 14:00:40
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 14:42:23
 * @FilePath: \vue3admin\src\network\main\system\system.ts
 */

import coderWhyApi from "@/network";

import { IDataType } from "../../types";

export function getPageListData(pageUrl: string, queryInfo: any) {
  return coderWhyApi.request({
    url: pageUrl,
    data: queryInfo,
    method: "POST",
  });
}

// url: /users/id
export function deleteListData(pageUrl: string) {
  return coderWhyApi.delete<IDataType>({
    url: pageUrl,
  });
}
