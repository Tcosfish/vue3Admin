/*
 * @Author: tcosfish
 * @Date: 2022-06-03 13:23:34
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 11:20:25
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
  showPagination?: boolean;
  childrenProps?: {
    rowKey: "id";
    treeProp: {
      children: "children";
    };
  };
}

export { TF_Table };
