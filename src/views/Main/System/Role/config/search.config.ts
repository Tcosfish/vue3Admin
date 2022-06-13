/*
 * @Author: tcosfish
 * @Date: 2022-06-03 12:00:46
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-13 13:50:19
 * @FilePath: \vue3admin\src\views\Main\System\Role\config\search.config.ts
 */
import { IForm } from "@/components/BaseForm";

export const searchFormConfig: IForm = {
  formName: "Role高级检索",
  formItems: [
    {
      type: "input",
      model: "name",
      label: "用户名",
      rules: [],
      placeholder: "请输入用户名称",
    },
    {
      type: "input",
      model: "intro",
      label: "权限介绍",
      rules: [],
      placeholder: "请输入权限介绍",
    },
    {
      type: "datePicker",
      model: "createAt",
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
  showHeader: true,
  showFooter: true,
};
