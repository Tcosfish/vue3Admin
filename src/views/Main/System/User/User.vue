<!--
 * @Author: tcosfish
 * @Date: 2022-06-01 22:26:23
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-08 12:13:43
 * @FilePath: \vue3admin\src\views\Main\System\User\User.vue
-->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-list :listConfig="listConfig" :pageName="'user'" />
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
    return {
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
