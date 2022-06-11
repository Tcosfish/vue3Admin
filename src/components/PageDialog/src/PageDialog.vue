<!--
 * @Author: tcosfish
 * @Date: 2022-06-11 17:20:21
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 18:58:43
 * @FilePath: \vue3admin\src\components\PageDialog\src\PageDialog.vue
-->
<template>
  <div class="page-modal">
    <el-dialog
      v-model="showModal"
      :title="dialogConfig.formName"
      :destroy-on-close="true"
      center
    >
      <base-form v-bind="dialogConfig" v-model="modalFormData"></base-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showModal = false">退出</el-button>
          <el-button type="primary" @click="showModal = false">提交</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseForm from "@/components/BaseForm";

export default defineComponent({
  name: "PageDialog",
  props: {
    dialogConfig: {
      type: Object,
      require: true,
    },
    pageName: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    let showModal = ref<boolean>(false);
    const formItems = props.dialogConfig?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.model] = "";
    }
    let modalFormData = ref<any>(formOriginData);

    const createModalItem = () => {
      showModal.value = !showModal.value;
      for (const key in modalFormData.value) {
        modalFormData.value[key] = "";
      }
    };
    const editModalItem = (currentFormData?: any) => {
      showModal.value = !showModal.value;
      if (currentFormData) {
        for (const key in modalFormData.value) {
          modalFormData.value[key] = currentFormData[key];
        }
      }
    };

    return {
      modalFormData,
      showModal,
      createModalItem,
      editModalItem,
    };
  },
  components: {
    BaseForm,
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
