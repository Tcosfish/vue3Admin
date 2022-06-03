/*
 * @Author: tcosfish
 * @Date: 2022-06-03 22:13:37
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-03 22:31:29
 * @FilePath: \vue3admin\src\views\Main\System\User\config\list.config.ts
 */
import { TF_Table } from "@/components/BaseList/index";

export const TFTableConfig: TF_Table = {
  tableList: [
    {
      type: "show-data",
      prop: "id",
      label: "序号",
      width: "120",
    },
    {
      type: "show-data",
      prop: "name",
      label: "用户名",
      width: "120",
    },
    {
      type: "show-data",
      prop: "realname",
      label: "真实姓名",
      width: "100",
    },
    {
      type: "show-data",
      prop: "cellphone",
      label: "电话号码",
      width: "160",
    },
    {
      type: "show-data",
      prop: "id",
      label: "状态",
      width: "80",
      otherOption: [],
    },
    {
      type: "show-data",
      prop: "createAt",
      label: "创建时间",
      width: "240",
    },
    {
      type: "show-data",
      prop: "updateAt",
      label: "更新时间",
      width: "240",
    },
  ],
  operations: [
    {
      isScope: false,
      tag: "button",
      type: "text",
      message: "编辑",
      i_class: "el-icon-edit",
      onClick: "updateListItem",
    },
    {
      isScope: false,
      tag: "button",
      type: "text",
      message: "删除",
      i_class: "el-icon-delete",
      onClick: "deleteListItem",
    },
  ],
};
