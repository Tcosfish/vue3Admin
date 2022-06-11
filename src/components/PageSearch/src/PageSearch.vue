<!--
 * @Author: tcosfish
 * @Date: 2022-06-07 10:40:25
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 17:56:00
 * @FilePath: \vue3admin\src\components\PageSearch\src\PageSearch.vue
-->
<template>
  <div class="page-search">
    <base-form v-bind="searchFormConfig" v-model="formData" ref="baseFormRef">
      <template #header v-if="searchFormConfig.showHeader">
        <h1 class="search-header">{{ searchFormConfig.formName }}</h1>
      </template>
      <template #footer v-if="searchFormConfig.showFooter">
        <div class="handle-search-button">
          <el-button
            size="small"
            icon="el-icon-refresh"
            @click="handleFormReset"
          >
            重置
          </el-button>
          <el-button
            type="primary"
            size="small"
            icon="el-icon-search"
            @click="handleFormQuery"
          >
            搜索
          </el-button>
        </div>
      </template>
    </base-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseForm from "@/components/BaseForm";
import { getPageNameHandle } from "@/utils/getMenuHandle";

export default defineComponent({
  name: "PageSearch",
  props: {
    searchFormConfig: {
      type: Object,
      require: true,
    },
    pageName: {
      type: String,
      require: true,
    },
  },
  emits: [""],
  setup(props) {
    // 根据 search.config.js 动态创建对象
    const formItems = props.searchFormConfig?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.model] = "";
    }
    let formData = ref(formOriginData);
    let baseFormRef = ref<InstanceType<typeof BaseForm>>();
    const handleFormReset = () => {
      baseFormRef.value?.formReset();
      console.log("表单已重置");
    };

    const handleFormQuery = () => {
      // console.log(formData.value);
      console.log("搜索操作已执行");
    };

    const getHandle = (handleName: string) => {
      return getPageNameHandle(props.pageName as string, handleName);
    };

    return {
      baseFormRef,
      formData,
      handleFormReset,
      handleFormQuery,
      getHandle,
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
