/*
 * @Author: tcosfish
 * @Date: 2022-06-01 12:56:25
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-04 12:18:15
 * @FilePath: \vue3admin\src\router\main\analysis\overview\overview.ts
 */
const Overview = () => import("@/views/Main/Analysis/Overview/Overview.vue");
export default {
  path: "/main/analysis/overview",
  name: "Overview",
  component: Overview,
  children: [],
  meta: {
    title: "核心技术",
  },
};
