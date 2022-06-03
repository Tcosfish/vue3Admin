<!--
 * @Author: tcosfish
 * @Date: 2022-06-01 22:26:23
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-03 12:16:55
 * @FilePath: \vue3admin\src\views\Main\System\User\User.vue
-->
<template>
  <div class="user">
    <div class="search">
      <base-form v-bind="searchFormConfig" />
    </div>
    <div class="list">
      <base-list />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseForm from "@/components/BaseForm";
import BaseList from "@/components/BaseList";
import { searchFormConfig } from "./config/search.config";

export default defineComponent({
  name: "User",
  setup() {
    return {
      searchFormConfig,
    };
  },
  components: {
    BaseForm,
    BaseList,
  },
});
</script>

<style scoped lang="less">
.user {
  div {
    border-radius: 5px;
  }
  .search {
    background: #fff;
  }
  .list {
    margin-top: 60px;
    background: #fff;
  }
}
</style>
