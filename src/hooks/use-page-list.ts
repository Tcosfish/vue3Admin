/*
 * @Author: tcosfish
 * @Date: 2022-06-11 19:04:54
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-12 00:15:46
 * @FilePath: \vue3admin\src\hooks\use-page.ts
 */

import { ref } from "vue";
import PageDialog from "@/components/PageDialog";

export function usePageList() {
  const pageModalRef = ref<InstanceType<typeof PageDialog>>();
  const createFormItem = () => {
    pageModalRef.value?.createModalItem();
  };
  const updateFormItem = (listItem: any) => {
    pageModalRef.value?.editModalItem(listItem);
  };
  return { pageModalRef, createFormItem, updateFormItem };
}
