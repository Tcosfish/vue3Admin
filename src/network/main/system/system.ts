/*
 * @Author: tcosfish
 * @Date: 2022-06-07 14:00:40
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-07 14:06:45
 * @FilePath: \vue3admin\src\network\main\system\system.ts
 */

import coderWhyApi from "@/network";

export function getPageListData(pageUrl: string, queryInfo: any) {
  return coderWhyApi.request({
    url: pageUrl,
    data: queryInfo,
    method: "POST",
  });
}
