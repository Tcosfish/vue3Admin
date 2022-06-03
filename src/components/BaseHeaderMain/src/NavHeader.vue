<!--
 * @Author: tcosfish
 * @Date: 2022-05-31 21:41:54
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-31 23:10:53
 * @FilePath: \vue3admin\src\components\BaseHeaderMain\src\NavHeader.vue
-->
<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handFoldChange"
    ></i>
    <!-- <el-breadcrumb separator="/">
      <template v-for="path in currentPaths" :key="'sep' + path">
        <el-breadcrumb-item> {{ path }} </el-breadcrumb-item>
      </template>
    </el-breadcrumb> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavHeader",
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false);
    const handFoldChange = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };

    // 面包屑问题
    return {
      isFold,
      handFoldChange,
    };
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
.nav-header {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.fold-menu {
  font-size: 30px;
  cursor: pointer;
}
</style>
