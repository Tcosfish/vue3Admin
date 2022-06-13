<!--
 * @Author: tcosfish
 * @Date: 2022-06-01 22:26:23
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-12 18:49:31
 * @FilePath: \vue3admin\src\views\Main\System\User\User.vue
-->
<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      :pageName="pageName"
      @handleFormQuery="queryClick"
      @handleFormReset="resetClick"
    />
    <page-list
      ref="pageListRef"
      :listConfig="listConfig"
      :pageName="pageName"
      @createClick="createFormItem"
      @editClick="updateFormItem"
    />
    <page-dialog
      :dialogConfig="modalConfigCom"
      :pageName="pageName"
      :isCreate="isCreateClick"
      ref="pageModalRef"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";

import PageSearch from "@/components/PageSearch";
import PageList from "@/components/PageList";
import PageDialog from "@/components/PageDialog";

import { searchFormConfig } from "./config/search.config";
import { dialogConfig } from "./config/dialog.config";
import { listConfig } from "./config/list.config";

import { usePageList } from "@/hooks/use-page-list";
import { usePageSearch } from "@/hooks/use-page-search";

export default defineComponent({
  name: "User",
  setup() {
    const pageName = "user";

    const { pageListRef, queryClick, resetClick } = usePageSearch();

    let isCreateClick = ref(true);
    // 新建的时候的回调函数
    const newCallBack = () => {
      dialogConfig.formName = "新增用户";
      const passwordItem = dialogConfig.formItems.find(
        (item) => item.model === "password"
      );
      if (passwordItem?.isHidden) {
        passwordItem.isHidden = false;
      }
      isCreateClick.value = true;
    };
    // 编辑的时候的回调函数
    const editCallBack = () => {
      dialogConfig.formName = "编辑用户";
      const passwordItem = dialogConfig.formItems.find(
        (item) => item.model === "password"
      );
      if (passwordItem?.isHidden === false) {
        passwordItem.isHidden = true;
      }
      isCreateClick.value = false;
    };

    //  动态添加部门和角色列表
    const store = useStore();
    const modalConfigCom = computed(() => {
      const departmentItem = dialogConfig.formItems.find(
        (item) => item.model === "departmentId"
      );
      if (departmentItem?.options) {
        departmentItem.options = store.state.entireDepartment.map(
          (item: any) => {
            return { title: item.name, value: item.id };
          }
        );
      }
      const roleItem = dialogConfig.formItems.find(
        (item) => item.model === "roleId"
      );
      if (roleItem?.options) {
        roleItem.options = store.state.entireRole.map((item: any) => {
          return { title: item.name, value: item.id };
        });
      }
      return dialogConfig;
    });

    // 调用 Hooks
    const { pageModalRef, createFormItem, updateFormItem } = usePageList(
      newCallBack,
      editCallBack
    );

    return {
      pageName,
      searchFormConfig,
      modalConfigCom,
      listConfig,
      createFormItem,
      pageModalRef,
      updateFormItem,
      pageListRef,
      queryClick,
      resetClick,
      isCreateClick,
    };
  },
  components: {
    PageSearch,
    PageList,
    PageDialog,
  },
});
</script>

<style scoped lang="less">
.user {
  div {
    border-radius: 5px;
  }
}
</style>
