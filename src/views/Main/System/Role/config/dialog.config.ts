/*
 * @Author: tcosfish
 * @Date: 2022-06-11 15:10:45
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-13 14:00:42
 * @FilePath: \vue3admin\src\views\Main\System\Role\config\dialog.config.ts
 */
import { IForm } from "@/components/BaseForm";

export const dialogConfig: IForm = {
  formName: "新增角色",
  formItems: [
    {
      type: "input",
      model: "name",
      label: "角色名",
      rules: [],
      placeholder: "请输入角色名",
    },
    {
      type: "input",
      model: "intro",
      label: "角色介绍",
      rules: [],
      placeholder: "请输入角色介绍",
    },
  ],
  labelWidth: "100px",
  itemStyle: {
    padding: "5px 20px",
  },
  colLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24,
  },
  showFooter: false,
  showHeader: false,
};
