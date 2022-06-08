<!--
 * @Author: tcosfish
 * @Date: 2022-06-07 10:40:25
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-07 10:54:16
 * @FilePath: \vue3admin\src\components\PageSearch\src\PageSearch.vue
-->
<template>
  <div class="page-search">
    <base-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="search-header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-search-button">
          <el-button size="small" icon="el-icon-refresh"> 重置 </el-button>
          <el-button type="primary" size="small" icon="el-icon-search">
            搜索
          </el-button>
        </div>
      </template>
    </base-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import BaseForm from "@/components/BaseForm";

export default defineComponent({
  name: "PageSearch",
  props: {
    searchFormConfig: {
      type: Object,
      require: true,
    },
  },
  setup() {
    const formData = reactive({
      id: "",
      name: "",
      password: "",
      cellphone: "",
      status: "",
      createAt: "",
    });

    return {
      formData,
    };
  },
  components: {
    BaseForm,
  },
});
</script>

<style scoped lang="less">
.page-search {
  .search-header {
    padding-top: 20px;
  }
  background: #fff;
  .handle-search-button {
    text-align: right;
    padding: 20px 50px;
  }
}
</style>
