/*
 * @Author: tcosfish
 * @Date: 2022-06-03 13:23:34
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-03 22:30:04
 * @FilePath: \vue3admin\src\components\BaseList\types\index.ts
 */

type TableItemType = "show-data" | "operations";

interface operation {
  isScope: boolean;
  tag: string;
  type: string;
  message: string;
  i_class?: string;
  onClick?: string;
}

interface TableItem {
  type: TableItemType;
  prop: string;
  label: string;
  width?: string;
  otherOption?: any[];
}

interface TF_Table {
  tableList: TableItem[];
  operations?: operation[];
}

export { TF_Table };
