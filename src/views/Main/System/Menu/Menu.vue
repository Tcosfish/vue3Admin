<!--
 * @Author: tcosfish
 * @Date: 2022-06-01 22:27:12
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-08 17:23:44
 * @FilePath: \vue3admin\src\views\Main\System\Menu\Menu.vue
-->
<template>
  <div class="menu">
    <page-list :listConfig="listConfig" :pageName="'menu'"></page-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageList from "@/components/PageList";
import { listConfig } from "./config/list.config";

export default defineComponent({
  name: "Menu",
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
