/*
 * @Author: tcosfish
 * @Date: 2022-06-07 23:01:48
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-07 23:35:43
 * @FilePath: \vue3admin\src\utils\getListDataByName.ts
 */

import { computed } from "vue";
import { useStore } from "vuex";

// 后端接口不规范的情况
// 配置页名对应接口地址
// 想要首字母大写的话, 可以使用字符串的 replace(), 用大写的 str[0].toUpperCase() 替换 str[0]
const pageUrlMap = new Map<string, string>([
  ["user", "users/list"],
  ["role", "roles/list"],
  ["department", "departments/list"],
]);
// getListDataByName("user", "system")
export function getListData(pageName?: string, pageModule?: string) {
  const pageUrl = pageUrlMap.get(pageName ?? "");
  // 如果 pageModule或是 pageUrl 没有传入, 则设置 count为 -1
  if (!pageModule || !pageUrl) return { list: [], count: -1 };
  const store = useStore();
  store.dispatch(`${pageModule}Module/getPageListAction`, {
    pageUrl: pageUrl,
    queryInfo: {
      offset: 0,
      size: 10,
    },
  });
  const list = computed(
    () => store.state[`${pageModule}Module`][`${pageName}List`]
  );
  const count = computed(
    () => store.state[`${pageModule}Module`][`${pageName}Count`]
  );
  return {
    list,
    count,
  };
}

// 后端接口规范情况
// getListDataByName("users", "system")
export default function getListDataByName(
  pageName?: string,
  pageModule = "system"
) {
  if (pageName === undefined) return { list: [], count: -1 };
  const store = useStore();
  store.dispatch(`${pageModule}Module/getPageListAction`, {
    pageUrl: `/${pageName}/list`,
    queryInfo: {
      offset: 0,
      size: 10,
    },
  });
  const list = computed(
    () => store.state[`${pageModule}Module`][`${pageName}List`]
  );
  const count = computed(
    () => store.state[`${pageModule}Module`][`${pageName}Count`]
  );
  return {
    list,
    count,
  };
}
