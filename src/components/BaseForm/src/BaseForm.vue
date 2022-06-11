<!--
 * @Author: tcosfish
 * @Date: 2022-06-03 09:55:10
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-09 20:57:12
 * @FilePath: \vue3admin\src\components\BaseForm\src\BaseForm.vue
-->
<template>
  <div class="tf-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth" :model="formData">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8" v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :type="item.type"
                  :show-password="item.type === 'password'"
                  v-model.lazy="formData[`${item.model}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="formData[`${item.model}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datePicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.model}`]"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import { IFormItem } from "../types";

export default defineComponent({
  name: "BaseForm",
  props: {
    modelValue: {
      type: Object,
      require: true,
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => [],
    },
    labelWidth: {
      type: String,
      default: "100px",
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: "10px 40px",
      }),
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24,
      }),
    },
  },
  emits: ["update:modelValue", "emitBaseForm"],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue });
    watch(
      formData,
      (newValue) => {
        emit("update:modelValue", newValue, { deep: true }); // 深度监听
      },
      { deep: true }
    );

    const formReset = () => {
      // console.log("hello");
      for (const key in formData) {
        formData.value[key] = "";
      }
    };
    return {
      formData,
      formReset,
    };
  },
});
</script>

<style scoped lang="less">
/* @import url(); 引入css类 */
</style>
