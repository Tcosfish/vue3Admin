<!--
 * @Author: tcosfish
 * @Date: 2022-05-19 20:38:12
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-22 16:46:47
 * @FilePath: \vue3admin\src\views\Login\cpns\LoginAccount.vue
-->
<template>
  <el-form
    label-width="100px"
    :model="formAccount"
    :rules="rulesAccount"
    ref="formRef"
  >
    <el-form-item label="Account" prop="account">
      <el-input v-model="formAccount.account" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model="formAccount.password" show-password />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { ElForm } from "element-plus";
import MyCache from "../../../utils/cache";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginAccount",
  setup() {
    const store = useStore();

    const formAccount = reactive({
      account: MyCache.getCache("account") ?? "",
      password: MyCache.getCache("password") ?? "",
    });
    const rulesAccount = {
      account: [
        { required: true, message: "Plase input Account", trigger: "blur" },
        {
          pattern: /^[a-z0-9]{6,15}$/,
          message: "Account should is a-z or 0-9",
          trigger: "blur",
        },
      ],
      password: [
        { required: true, message: "Plase input Password", trigger: "blur" },
        {
          pattern: /^[a-z0-9]{6,15}$/,
          message: "Password should is a-z or 0-9",
          trigger: "blur",
        },
      ],
    };

    // TODO 获取实例类型的正确方式, 或者说获取组件实例类型的正确方式
    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAccount = (isKeepPassword: boolean) => {
      console.log("Account login!");
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1. 判断需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            MyCache.setCache("account", formAccount.account);
            MyCache.setCache("password", formAccount.password);
            console.log("save cache success !");
          } else {
            MyCache.removeCache("account");
            MyCache.removeCache("password");
            formRef.value?.resetFields();
            console.log("remove cache success !");
          }
          // 2. 执行请求逻辑
          store.dispatch("loginModule/accountLoginAction", { ...formAccount });
          // 3. 跳转到首页
          // const $router = useRouter();
          // console.log("111111111", $router);      // ! ????
        } else {
          formRef.value?.resetFields();
        }
      });
    };

    return {
      formRef,
      formAccount,
      rulesAccount,
      loginAccount,
    };
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
