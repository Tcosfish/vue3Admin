/*
 * @Author: tcosfish
 * @Date: 2022-06-03 12:00:46
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-03 12:02:41
 * @FilePath: \vue3admin\src\views\Main\System\User\config\search.config.ts
 */
import { IForm } from "@/components/BaseForm";

export const searchFormConfig: IForm = {
  formItems: [
    {
      type: "input",
      label: "id",
      rules: [],
      placeholder: "请输入id",
    },
    {
      type: "input",
      label: "用户名",
      rules: [],
      placeholder: "请输入用户名",
    },
    {
      type: "password",
      label: "密码",
      rules: [],
      placeholder: "请输入密码",
    },
    {
      type: "input",
      label: "电话号码",
      rules: [],
      placeholder: "请输入电话号码",
    },
    {
      type: "select",
      label: "状态",
      rules: [],
      placeholder: "请选择当前状态",
      options: [
        { title: "启用", value: "success" },
        { title: "待启用", value: "primary" },
        { title: "待弃用", value: "warning" },
        { title: "弃用", value: "error" },
      ],
    },
    {
      type: "datePicker",
      label: "创建时间",
      rules: [],
      otherOptions: {
        type: "daterange",
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        rangeSeparator: "-",
        defaultValue: [new Date(2022, 5, 1), new Date(2022, 6, 3)],
      },
    },
  ],
  itemStyle: { padding: "10px 40px" },
};