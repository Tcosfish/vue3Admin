/*
 * @Author: tcosfish
 * @Date: 2022-06-07 14:00:40
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-12 18:47:50
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

export function getPageListData_plus<T = any>(pageUrl: string, queryInfo: any) {
  return coderWhyApi.request_plus<T>({
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

export function createPageData(url: string, newData: any) {
  delete newData.id; // 记得把 id删了, 后台不然不鸟你
  return coderWhyApi.post<IDataType>({
    url: url,
    data: newData,
  });
}

export function editPageData(url: string, editData: any) {
  return coderWhyApi.patch<IDataType>({
    url: url,
    data: editData,
  });
}
