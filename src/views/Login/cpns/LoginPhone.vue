<!--
 * @Author: tcosfish
 * @Date: 2022-05-19 20:38:00
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-19 21:39:09
 * @FilePath: \vue3admin\src\views\Login\cpns\LoginPhone.vue
-->
<template>
  <el-form label-width="100px" :model="formPhone" :rules="rulesPhone">
    <el-form-item label="Phone" prop="phone">
      <el-input v-model="formPhone.phone" />
    </el-form-item>
    <el-form-item label="Code">
      <el-row>
        <el-col :span="14">
          <el-input type="password" v-model="formPhone.code" show-password />
        </el-col>
        <el-col :span="10">
          <el-button type="primary">GetCode</el-button>
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "LoginPhone",
  setup() {
    const formPhone = reactive({
      phone: "",
      code: "",
    });

    const rulesPhone = {
      phone: [
        { required: true, message: "Plase input Phone", trigger: "blur" },
        {
          pattern: /^[0-9]{6,11}$/,
          message: "Phone should is 0-9",
          trigger: "blur",
        },
      ],
    };

    return {
      formPhone,
      rulesPhone,
    };
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
