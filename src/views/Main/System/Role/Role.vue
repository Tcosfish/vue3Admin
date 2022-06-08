<!--
 * @Author: tcosfish
 * @Date: 2022-06-01 22:27:22
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-08 12:01:24
 * @FilePath: \vue3admin\src\views\Main\System\Role\Role.vue
-->
<template>
  <div class="role">
    <page-list :listConfig="listConfig" :pageName="'role'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { listConfig } from "./config/list.config";
import PageList from "@/components/PageList";

export default defineComponent({
  name: "Role",
  setup() {
    return {
      listConfig,
    };
  },
  components: {
    PageList,
  },
});
</script>

<style scoped></style>
