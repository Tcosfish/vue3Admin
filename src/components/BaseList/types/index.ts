/*
 * @Author: tcosfish
 * @Date: 2022-06-03 13:23:34
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-07 21:38:55
 * @FilePath: \vue3admin\src\components\BaseList\types\index.ts
 */

interface TableItem {
  prop: string;
  label: string;
  slot: string;
  width?: string;
  otherOption?: any[];
}

interface TF_Table {
  title?: string;
  tableItems: TableItem[];
  showIndexColumn?: boolean;
  showSelectColumn?: boolean;
}

export { TF_Table };
