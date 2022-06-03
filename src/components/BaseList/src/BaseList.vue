<!--
 * @Author: tcosfish
 * @Date: 2022-06-03 12:12:30
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-03 23:29:06
 * @FilePath: \vue3admin\src\components\BaseList\src\BaseList.vue
-->
<template>
  <div class="tf-list">
    <el-row class="list-header">
      <el-col :span="6">
        <h4>用户列表</h4>
      </el-col>
      <el-col :span="6" :offset="12">
        <el-button type="primary" size="small">新建用户</el-button>
        <el-button type="primary" size="small">刷新</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 94%">
      <el-table-column
        v-for="item in tableItems"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      ></el-table-column>
      <el-table-column v-if="operations" label="操作" width="140">
        <template #default>
          <template v-for="operation in operations" :key="operation.message">
            <component :is="operation.tag" :type="operation.type">
              <i v-if="operation.i_class" :class="operation.i_class"></i>
              {{ operation.message }}
            </component>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseList",
  props: {
    tableItems: {
      type: Array,
      default: () => [],
    },
    operations: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const tableData = [
      {
        id: 1,
        name: "coderwhy",
        realname: "coderwhy",
        cellphone: 18812345678,
        status: 1,
        createAt: "2021-01-02T10:20:26.000Z",
        updateAt: "2021-01-03T04:50:13.000Z",
      },
      {
        id: 2,
        name: "james",
        realname: "james",
        cellphone: 18811245678,
        status: 1,
        createAt: "2021-01-02T10:20:26.000Z",
        updateAt: "2021-01-03T04:50:13.000Z",
      },
    ];
    return {
      tableData,
    };
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
.my-button-primary {
  color: #409eff;
}
.my-button-danger {
  color: #f56c6c;
}
</style>
