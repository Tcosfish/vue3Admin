<!--
 * @Author: tcosfish
 * @Date: 2022-06-01 22:27:22
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 10:51:13
 * @FilePath: \vue3admin\src\views\Main\System\Role\Role.vue
-->
<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      :pageName="pageName"
      @handleFormQuery="queryClick"
      @handleFormReset="resetClick"
    />
    <page-list
      ref="pageListRef"
      :listConfig="listConfig"
      :pageName="pageName"
      @createClick="createFormItem"
      @editClick="updateFormItem"
    />
    <page-dialog
      ref="pageModalRef"
      :dialogConfig="dialogConfig"
      :pageName="pageName"
      :isCreate="isCreateClick"
      :otherInfo="otherInfo"
    >
      <template #default>
        <el-tree
          ref="elTreeRef"
          style="padding: 5px 30px"
          :data="menu"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="getCurrentMenu"
        />
      </template>
    </page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, nextTick } from "vue";
import { useStore } from "vuex";
import { getMenuLeafKey } from "@/utils/mapMenu";

import PageList from "@/components/PageList";
import PageSearch from "@/components/PageSearch";
import PageDialog from "@/components/PageDialog";
import { ElTree } from "element-plus";

import { listConfig } from "./config/list.config";
import { searchFormConfig } from "./config/search.config";
import { dialogConfig } from "./config/dialog.config";

import { usePageList } from "@/hooks/use-page-list";
import { usePageSearch } from "@/hooks/use-page-search";

export default defineComponent({
  name: "Role",
  setup() {
    const pageName = "role";
    let isCreateClick = ref(true);

    const { pageListRef, queryClick, resetClick } = usePageSearch();

    // 新建时候的回调
    const newCallBack = () => {
      dialogConfig.formName = "新增角色";
      isCreateClick.value = true;
    };
    // 编辑的时候的回调函数
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    console.log("elTree.value: ", elTreeRef.value); // ! undefined

    const editCallBack = (item: any) => {
      dialogConfig.formName = "编辑角色";
      const leafKeys = getMenuLeafKey(item.menuList);

      nextTick(() => {
        console.log(leafKeys);
        console.log("editCallBack: ", elTreeRef);
        console.log("editCallBack: ", elTreeRef.value); // ! undefined
        elTreeRef.value?.setCheckedKeys(leafKeys, false);
      });

      isCreateClick.value = false;
    };

    // 动态生成权限树
    const store = useStore();
    let otherInfo = ref({});
    const menu = computed(() => store.state.entireMenu);
    const getCurrentMenu = (data: any, data2: any) => {
      const checkKeys = data2.checkedKeys;
      otherInfo.value = { ...checkKeys };
    };

    const { pageModalRef, createFormItem, updateFormItem } = usePageList(
      newCallBack,
      editCallBack
    );
    return {
      pageName,
      isCreateClick,
      listConfig,
      searchFormConfig,
      dialogConfig,
      createFormItem,
      pageModalRef,
      updateFormItem,
      pageListRef,
      queryClick,
      resetClick,
      menu,
      getCurrentMenu,
      otherInfo,
      elTreeRef,
    };
  },
  components: {
    PageList,
    PageSearch,
    PageDialog,
  },
});
</script>

<style scoped></style>
