<!--
 * @Author: tcosfish
 * @Date: 2022-05-19 16:38:23
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-22 13:12:43
 * @FilePath: \vue3admin\src\views\Login\cpns\LoginPanel.vue
-->
<template>
  <div class="login-panel">
    <h1 class="login-title">后台管理系统</h1>
    <el-tabs v-model="activeName" type="border-card" class="login-tabs" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="tabs-label">
            <el-icon :size="16"><Avatar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="cellphone">
        <template #label>
          <span class="tabs-label">
            <el-icon :size="16"><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>

    <el-row>
      <el-col :span="8">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      </el-col>
      <el-col :span="8" :offset="8">
        <el-link type="primary">忘记密码</el-link>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-button class="login-button" type="primary" @click="loginButton"
          >登录</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import { Avatar, Cellphone } from "@element-plus/icons-vue";
import LoginAccount from "./LoginAccount.vue";
import LoginPhone from "./LoginPhone.vue";
// type ElFormInstance = InstanceType<typeof ElForm>;       // * 获取 Ref实例的类型, Good!!

export default defineComponent({
  name: "LoginPanel",
  setup() {
    const activeName = ref("account");
    let isKeepPassword = ref(true);

    // 如何获取实例类型, InstanceType<typeof 组件名/模块/对象>
    let accountRef = ref<InstanceType<typeof LoginAccount>>(); // 不传就变成 Any类型了

    const loginButton = () => {
      accountRef?.value?.loginAccount(isKeepPassword.value);
    };

    return {
      accountRef,
      activeName,
      isKeepPassword,
      loginButton,
    };
  },
  components: {
    LoginAccount,
    LoginPhone,
    Avatar,
    Cellphone,
  },
});
</script>

<style scoped>
.login-panel {
  width: 400px;
  height: 400px;
}
.login-title {
  text-align: center;
}
.login-tabs {
  background: white;
  /* color: rgba(0, 0, 0, 0.5); */
}
.tabs-label .el-icon {
  vertical-align: middle;
}
.tabs-label span {
  vertical-align: middle;
  margin-left: 3px;
}
.el-row {
  margin-top: 10px;
}
.login-button {
  width: 90%;
}
</style>
