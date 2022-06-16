/*
 * @Author: tcosfish
 * @Date: 2022-05-09 17:46:51
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 13:27:17
 * @FilePath: \vue3admin\src\shims-vue.d.ts
 */
/* eslint-disable */
// 实现 declare 变现
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare module "*.json"
