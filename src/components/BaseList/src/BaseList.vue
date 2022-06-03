<!--
 * @Author: tcosfish
 * @Date: 2022-06-03 12:12:30
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-03 13:21:53
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
      <el-table-column prop="id" label="序号" width="120" />
      <el-table-column prop="name" label="用户名" width="120" />
      <el-table-column prop="realname" label="真实姓名" width="100" />
      <el-table-column prop="cellphone" label="电话号码" width="160" />
      <el-table-column prop="status" label="状态" width="80">
        <!-- 通过 scope 拿到绑定到 data上的对象 -->
        <template #default="scope">
          <el-tag :type="scope.row.status === 1 ? 'success' : 'dange'">
            {{ scope.row.status === 1 ? "启用" : "弃用" }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createAt" label="创建时间" width="240" />
      <el-table-column prop="updateAt" label="更新时间" width="240" />
      <el-table-column label="操作" width="140">
        <template #default>
          <el-button type="text" class="my-button-primary">
            <i class="el-icon-edit"></i>编辑
          </el-button>
          <el-button type="text" class="my-button-danger">
            <i class="el-icon-delete"></i>删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseList",
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
