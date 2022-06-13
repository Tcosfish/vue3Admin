<!--
 * @Author: tcosfish
 * @Date: 2022-05-22 15:40:56
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-12 19:04:05
 * @FilePath: \vue3admin\src\views\Main\Main.vue
-->
<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header height="50px" class="page-header">
          <nav-header @foldChange="NavFold" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NavMenu } from "@/components/BaseNavMain";
import { NavHeader } from "@/components/BaseHeaderMain";

export default defineComponent({
  name: "Main",
  setup() {
    const isCollapse = ref(false);
    const NavFold = (isFold: boolean) => {
      isCollapse.value = isFold;
    };
    return {
      isCollapse,
      NavFold,
    };
  },
  components: {
    NavMenu,
    NavHeader,
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
.main {
  height: 100vh;
  width: 100vw;
}
.main-content {
  height: 100%;
  width: 100%;
}
.el-aside {
  background: #123456;
  overflow: hidden;
  transition: width 0.15s;
}
.page-content {
  background: #f5f5f5;
  text-align: center;
}
.page-info {
  /* background-color: blue; */
}
</style>
