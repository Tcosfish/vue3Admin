<!--
 * @Author: tcosfish
 * @Date: 2022-06-04 11:20:34
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-08 17:35:18
 * @FilePath: \vue3admin\src\components\BaseNavBreadcrumb\src\BaseNavBreadcrumb.vue
-->

<template>
  <div class="tf-nav-breadcrumb">
    <el-breadcrumb :separator="separator">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.toPath }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IBreadcrumb } from "../types";

export default defineComponent({
  name: "BaseNavBreadcrumb",
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb>,
      default: () => [],
    },
    separator: {
      type: String as PropType<string>,
      default: "/",
    },
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
