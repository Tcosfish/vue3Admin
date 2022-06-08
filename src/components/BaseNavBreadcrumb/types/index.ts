/*
 * @Author: tcosfish
 * @Date: 2022-06-04 11:22:06
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-04 12:39:40
 * @FilePath: \vue3admin\src\components\BaseNavBreadcrumb\types\index.ts
 */
export interface IBreadcrumbItem {
  name: string;
  toPath?: string;
}

export type IBreadcrumb = IBreadcrumbItem[];
