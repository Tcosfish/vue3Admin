<!--
 * @Author: tcosfish
 * @Date: 2022-06-01 22:26:23
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 19:13:19
 * @FilePath: \vue3admin\src\views\Main\System\User\User.vue
-->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" :pageName="pageName" />
    <page-list
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

import { usePage } from "@/hooks/use-page";

export default defineComponent({
  name: "User",
  setup() {
    const { pageName, pageModalRef, createFormItem, updateFormItem } =
      usePage("user");
    return {
      pageName,
      searchFormConfig,
      dialogConfig,
      listConfig,
      createFormItem,
      pageModalRef,
      updateFormItem,
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
