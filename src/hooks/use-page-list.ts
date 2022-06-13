/*
 * @Author: tcosfish
 * @Date: 2022-06-11 19:04:54
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-13 21:13:42
 * @FilePath: \vue3admin\src\hooks\use-page-list.ts
 */

import { ref } from "vue";
import PageDialog from "@/components/PageDialog";

type CallBackType = (item?: any) => void;

export function usePageList(newCb?: CallBackType, editCb?: CallBackType) {
  const pageModalRef = ref<InstanceType<typeof PageDialog>>();
  const createFormItem = () => {
    newCb && newCb();
    pageModalRef.value?.createModalItem();
  };
  const updateFormItem = (listItem: any) => {
    editCb && editCb(listItem);
    pageModalRef.value?.editModalItem(listItem);
  };
  return { pageModalRef, createFormItem, updateFormItem };
}
