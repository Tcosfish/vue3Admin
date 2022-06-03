<!--
 * @Author: tcosfish
 * @Date: 2022-05-09 23:14:27
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-17 21:15:15
 * @FilePath: \vue3admin\src\components\MyTable\MyTable.vue
-->
<template>
  <el-table :data="faker_data" border>
    <el-table-column prop="cid" label="ID" width="180"></el-table-column>
    <el-table-column prop="net_name" label="网名" width="180"></el-table-column>
    <el-table-column prop="name" label="真实姓名" width="180"></el-table-column>
    <el-table-column prop="phone" label="电话" width="180"></el-table-column>
    <el-table-column prop="login_state" label="状态" width="180">
      <!-- <el-tag :type="login_state === true ? 'success' : 'danger'">成功</el-tag> -->
    </el-table-column>
    <el-table-column
      prop="login_time"
      label="登录日期"
      width="180"
    ></el-table-column>
    <el-table-column label="操作">
      <el-button type="primary">修改</el-button>
      <el-button type="danger">删除</el-button>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { IFakerDate } from "./MyTable_interface";

export default {
  name: "MyTable",
  data(): IFakerDate {
    return {
      page: 2,
      faker_data: [
        {
          cid: 101,
          net_name: "123",
          name: "123",
          login_state: true,
          phone: 13266236560,
          login_time: "2022",
        },
        {
          cid: 102,
          net_name: "124",
          name: "124",
          login_state: false,
          phone: 13246236560,
          login_time: "2021",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
