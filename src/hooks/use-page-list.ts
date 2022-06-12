/*
 * @Author: tcosfish
 * @Date: 2022-06-11 19:04:54
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-12 15:43:34
 * @FilePath: \vue3admin\src\hooks\use-page-list.ts
 */

import { ref } from "vue";
import PageDialog from "@/components/PageDialog";

type CallBackType = () => void;

export function usePageList(newCb?: CallBackType, editCb?: CallBackType) {
  const pageModalRef = ref<InstanceType<typeof PageDialog>>();
  const createFormItem = () => {
    newCb && newCb();
    pageModalRef.value?.createModalItem();
  };
  const updateFormItem = (listItem: any) => {
    editCb && editCb();
    pageModalRef.value?.editModalItem(listItem);
  };
  return { pageModalRef, createFormItem, updateFormItem };
}
