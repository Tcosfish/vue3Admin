<!--
 * @Author: tcosfish
 * @Date: 2022-06-01 22:26:59
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-08 17:28:46
 * @FilePath: \vue3admin\src\views\Main\System\Department\Department.vue
-->
<template>
  <div class="department">
    <page-list :listConfig="listConfig" :pageName="'department'"></page-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageList from "@/components/PageList";
import { listConfig } from "./config/list.config";

export default defineComponent({
  name: "Department",
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
