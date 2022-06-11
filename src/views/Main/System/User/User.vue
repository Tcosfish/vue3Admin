<!--
 * @Author: tcosfish
 * @Date: 2022-06-01 22:26:23
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-12 00:15:26
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
      :dialogConfig="dialogConfig"
      :pageName="pageName"
      ref="pageModalRef"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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

    const { pageModalRef, createFormItem, updateFormItem } = usePageList();

    return {
      pageName,
      searchFormConfig,
      dialogConfig,
      listConfig,
      createFormItem,
      pageModalRef,
      updateFormItem,
      pageListRef,
      queryClick,
      resetClick,
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
