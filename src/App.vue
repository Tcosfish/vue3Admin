<!--
 * @Author: tcosfish
 * @Date: 2022-05-09 17:46:51
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-19 16:36:56
 * @FilePath: \vue3admin\src\App.vue
-->
<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
// import MyTable from "./components/MyTable/MyTable.vue";
import { defineComponent } from "vue";

// 使用 defineComponent 作用是在 ts 编程中提供提示, 相对 JS没用
export default defineComponent({
  name: "App",
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.app {
  height: 100%;
  width: 100%;
}
</style>
