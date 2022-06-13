<!--
 * @Author: tcosfish
 * @Date: 2022-05-31 21:41:54
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-13 13:17:32
 * @FilePath: \vue3admin\src\components\BaseHeaderMain\src\NavHeader.vue
-->
<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handFoldChange"
    ></i>
    <base-nav-breadcrumb :breadcrumbs="breadcrumbs" />
    <nav-user-info />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import NavUserInfo from "./NavUserInfo.vue";
import BaseNavBreadcrumb from "@/components/BaseNavBreadcrumb";
import { getBreadcrumbs } from "@/utils/mapMenu";

export default defineComponent({
  name: "NavHeader",
  emits: ["foldChange"],
  setup(props, { emit }) {
    // nav-main 显隐问题
    const isFold = ref(false);
    const handFoldChange = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };

    // 面包屑问题
    const breadcrumbs = computed(() => {
      const route = useRoute();
      const store = useStore();
      return getBreadcrumbs(store.state.loginModule.userMenu, route.path);
    });

    return {
      isFold,
      handFoldChange,
      breadcrumbs,
    };
  },
  components: {
    NavUserInfo,
    BaseNavBreadcrumb,
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
.nav-header {
  margin-top: 10px;
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
}
.fold-menu {
  font-size: 30px;
  cursor: pointer;
}
</style>
