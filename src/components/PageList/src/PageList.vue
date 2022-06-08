<!--
 * @Author: tcosfish
 * @Date: 2022-06-07 14:34:00
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-08 12:29:16
 * @FilePath: \vue3admin\src\components\PageList\src\PageList.vue
-->
<template>
  <div class="page-list">
    <base-list v-bind="listConfig" :listData="list">
      <!-- list-header 相关的插槽内容 -->
      <template #list-header-hander>
        <el-button type="primary" size="small" icon="el-icon-plus"
          >新增
        </el-button>
        <el-button size="small" icon="el-icon-refresh"></el-button>
      </template>
      <!-- el-table 相关的插槽内容 -->
      <template #status="scope">
        <el-tag :type="scope.row.enable === 1 ? 'success' : 'danger'">
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-tag>
      </template>
      <template #createAt="scope">
        {{ $filters.formatTimeUTC(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTimeUTC(scope.row.updateAt) }}
      </template>
      <template #operations>
        <el-button type="text" size="mini" icon="el-icon-edit">编辑</el-button>
        <el-button
          type="text"
          size="mini"
          icon="el-icon-refresh"
          style="color: #f56c6c"
          >刷新
        </el-button>
      </template>
    </base-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import BaseList from "@/components/BaseList";

export default defineComponent({
  name: "PageList",
  props: {
    listConfig: {
      type: Object,
      require: true,
    },
    pageName: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const store = useStore();
    store.dispatch("systemModule/getPageListAction", {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10,
      },
    });
    const list = computed(
      () => store.state.systemModule[`${props.pageName}List`]
    );
    const count = computed(
      () => store.state.systemModule[`${props.pageName}Count`]
    );
    return {
      list,
      count,
    };
  },
  components: {
    BaseList,
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
.page-list {
  background: #fff;
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
