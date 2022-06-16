<!--
 * @Author: tcosfish
 * @Date: 2022-06-14 15:37:14
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-14 16:14:57
 * @FilePath: \vue3admin\src\components\BaseCard\src\BaseCard.vue
-->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        {{ title }}
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCard",
  props: {
    title: {
      type: String,
      default: "Title",
    },
  },
});
</script>

<style lang="less" scoped>
/* @import url(); 引入css类 */
.box-card {
  &:deep(.el-card__header) {
    padding: 10px 20px !important;
  }
}

.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
}

.item {
  margin-bottom: 10px;
  // height: calc(100% - 50px);
}
</style>
