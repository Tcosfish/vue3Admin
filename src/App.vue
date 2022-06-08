<!--
 * @Author: tcosfish
 * @Date: 2022-05-09 17:46:51
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-07 22:20:21
 * @FilePath: \vue3admin\src\App.vue
-->
<template>
  <div class="app">
    <ElConfigProvider :locale="locale">
      <router-view></router-view>
    </ElConfigProvider>
  </div>
</template>

<script lang="ts">
// import MyTable from "./components/MyTable/MyTable.vue";
import { ElConfigProvider } from "element-plus";
import { defineComponent, ref } from "vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

// 使用 defineComponent 作用是在 ts 编程中提供提示, 相对 JS没用
export default defineComponent({
  name: "App",
  components: {
    [ElConfigProvider.name]: ElConfigProvider, //添加组件
  },
  setup() {
    const locale = ref(zhCn);
    return {
      locale,
    };
  },
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
