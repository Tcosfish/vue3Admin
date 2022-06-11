/*
 * @Author: tcosfish
 * @Date: 2022-06-12 00:10:53
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-12 00:12:12
 * @FilePath: \vue3admin\src\hooks\use-page-search.ts
 */

import { ref } from "vue";

import PageList from "@/components/PageList";

export function usePageSearch() {
  const pageListRef = ref<InstanceType<typeof PageList>>();
  const queryClick = (item: any) => {
    const queryInfo: { [key: string]: string } = {};
    for (const key in item) {
      if (item[key] !== "") {
        queryInfo[key] = item[key];
      }
    }
    console.log("queryInfo: ", queryInfo);
    pageListRef.value?.getPageList(queryInfo);
  };
  const resetClick = () => {
    pageListRef.value?.getPageList();
  };
  return { pageListRef, queryClick, resetClick };
}
