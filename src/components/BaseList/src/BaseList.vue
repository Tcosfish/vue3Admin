<!--
 * @Author: tcosfish
 * @Date: 2022-06-03 12:12:30
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-08 11:42:42
 * @FilePath: \vue3admin\src\components\BaseList\src\BaseList.vue
-->
<template>
  <div class="tf-list">
    <div class="list-header">
      <slot name="list-header">
        <div class="title">
          {{ title }}
        </div>
        <div class="handler">
          <slot name="list-header-hander"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="listData" border @selection-change="handleSelectionChange">
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="列表序号"
        align="center"
        width="80"
      ></el-table-column>
      <el-table-column
        v-for="item in tableItems"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.width"
        align="center"
      >
        <template #default="scope">
          <slot :name="item.slot" :row="scope.row">
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="list-footer">
      <slot name="list-footer">
        <!-- <el-pagination
          page-size="100"
          small
          layout="sizes, prev, pager, next, jumper, ->, total"
          :total="100"
        /> -->
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseList",
  props: {
    title: {
      type: String,
    },
    // 列表头
    tableItems: {
      type: Array,
      default: () => [],
    },
    // 列表数据
    listData: {
      type: Array,
      require: true,
    },
    showIndexColumn: {
      type: Boolean,
      default: false,
    },
    showSelectColumn: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["selectionChange"],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit("selectionChange", value); // 前面打开选择功能时, 发射 selectionChange 事件
    };

    return {
      handleSelectionChange,
    };
  },
});
</script>

<style lang="less" scoped>
/* @import url(); 引入css类 */
.list-header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
}
.list-footer {
  margin-top: 15px;
  .el-pagination {
    text-align: right;
  }
}
</style>
