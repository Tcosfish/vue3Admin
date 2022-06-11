<!--
 * @Author: tcosfish
 * @Date: 2022-06-01 22:26:23
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 12:35:38
 * @FilePath: \vue3admin\src\views\Main\System\User\User.vue
-->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" :pageName="pageName" />
    <page-list :listConfig="listConfig" :pageName="pageName" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageSearch from "@/components/PageSearch";
import PageList from "@/components/PageList";
import { searchFormConfig } from "./config/search.config";
import { listConfig } from "./config/list.config";

export default defineComponent({
  name: "User",
  setup() {
    const pageName = "user";
    return {
      pageName,
      searchFormConfig,
      listConfig,
    };
  },
  components: {
    PageSearch,
    PageList,
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
