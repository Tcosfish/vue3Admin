/*
 * @Author: tcosfish
 * @Date: 2022-06-03 22:13:37
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-08 17:31:37
 * @FilePath: \vue3admin\src\views\Main\System\Menu\config\list.config.ts
 */
import { TF_Table } from "@/components/BaseList/index";

export const listConfig: TF_Table = {
  // 列表名
  title: "菜单列表",
  // 列表列设置
  tableItems: [
    {
      prop: "name",
      label: "菜单名称",
      width: "120",
      slot: "default",
    },
    {
      prop: "createAt",
      label: "创建时间",
      width: "200",
      slot: "createAt",
    },
    {
      prop: "updateAt",
      label: "更新时间",
      width: "200",
      slot: "updateAt",
    },
    {
      prop: "operations",
      label: "操作",
      width: "160",
      slot: "operations",
    },
  ],
  // 是否显示序号
  showIndexColumn: true,
  // 是否显示行选择
  showSelectColumn: true,
};
