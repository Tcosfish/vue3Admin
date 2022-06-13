<!--
 * @Author: tcosfish
 * @Date: 2022-06-04 11:05:48
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-13 13:28:05
 * @FilePath: \vue3admin\src\components\BaseHeaderMain\src\NavUserInfo.vue
-->
<template>
  <div class="nav-header-content">
    <el-avatar
      size="small"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ userName }}
        <i class="el-icon-arrow-down"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick">退出登录</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import MyCache from "@/utils/cache";

export default defineComponent({
  name: "NavUserInfo",
  setup() {
    const store = useStore();
    const router = useRouter();
    const userName = store.state.name;
    const handleExitClick = () => {
      console.log("exit loading...");
      MyCache.removeCache("token");
      router.push("Main");
    };
    return {
      userName,
      handleExitClick,
    };
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
.nav-header-content {
  width: 130px;
  margin-right: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
