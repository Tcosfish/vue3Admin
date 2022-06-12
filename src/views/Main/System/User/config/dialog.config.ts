/*
 * @Author: tcosfish
 * @Date: 2022-06-11 15:10:45
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-12 15:53:05
 * @FilePath: \vue3admin\src\views\Main\System\User\config\dialog.config.ts
 */
import { IForm } from "@/components/BaseForm";

export const dialogConfig: IForm = {
  formName: "新增用户",
  formItems: [
    {
      type: "input",
      model: "name",
      label: "用户名",
      rules: [],
      placeholder: "请输入用户名",
    },
    {
      type: "input",
      model: "realname",
      label: "真实姓名",
      rules: [],
      placeholder: "请输入真实姓名",
    },
    {
      type: "password",
      model: "password",
      label: "密码",
      rules: [],
      placeholder: "请输入密码",
      isHidden: true,
    },
    {
      type: "input",
      model: "cellphone",
      label: "电话号码",
      rules: [],
      placeholder: "请输入电话号码",
    },
    {
      type: "select",
      model: "departmentId",
      label: "选择部门",
      rules: [],
      placeholder: "请选择部门",
      options: [],
    },
    {
      type: "select",
      model: "roleId",
      label: "选择角色",
      rules: [],
      placeholder: "请选择角色",
      options: [],
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
