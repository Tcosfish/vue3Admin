<!--
 * @Author: tcosfish
 * @Date: 2022-06-11 17:20:21
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-12 18:06:55
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
          <el-button type="primary" @click="handleSubmitClick">提交</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
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
    isCreate: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    let showModal = ref<boolean>(false);
    const formItems = props.dialogConfig?.formItems ?? [];
    const formOriginData: any = {};
    formOriginData["id"] = "";
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

    const store = useStore();
    const handleSubmitClick = () => {
      showModal.value = false;
      // 区分新建和编辑
      if (props.isCreate) {
        console.log("新建");
        console.log(props.pageName);
        store.dispatch("systemModule/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...modalFormData.value },
        });
      } else {
        console.log("编辑");
        store.dispatch("systemModule/editPageDataAction", {
          pageName: props.pageName,
          editData: { ...modalFormData.value },
          id: modalFormData.value.id,
        });
      }
    };

    return {
      modalFormData,
      showModal,
      createModalItem,
      editModalItem,
      handleSubmitClick,
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
