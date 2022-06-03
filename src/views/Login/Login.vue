<!--
 * @Author: tcosfish
 * @Date: 2022-05-19 16:25:09
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-19 21:30:32
 * @FilePath: \vue3admin\src\views\Login\Login.vue
-->
<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginPanel from "./cpns/LoginPanel.vue";

export default defineComponent({
  name: "Login",
  components: {
    LoginPanel,
  },
});
</script>

<style lang="less">
/* @import url(); 引入css类 */
.login {
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/img/login-bg.svg");
  text-align: center;
}
</style>
