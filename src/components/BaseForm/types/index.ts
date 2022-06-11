/*
 * @Author: tcosfish
 * @Date: 2022-06-03 10:15:29
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 15:21:44
 * @FilePath: \vue3admin\src\components\BaseForm\types\index.ts
 */

type IFormType = "input" | "password" | "select" | "datePicker";

export interface IFormItem {
  type: IFormType;
  model: string;
  label: string;
  rules?: any[];
  placeholder?: string;
  options?: any[]; // 只对 select
  otherOptions?: any; // 不同表单组件的特有配置
}

export interface IForm {
  formName: string;
  formItems: IFormItem[];
  labelWidth?: string;
  itemStyle?: any;
  colLayout?: any;
  showHeader?: boolean;
  showFooter?: boolean;
}
