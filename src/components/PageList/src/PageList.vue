<!--
 * @Author: tcosfish
 * @Date: 2022-06-07 14:34:00
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 23:52:27
 * @FilePath: \vue3admin\src\components\PageList\src\PageList.vue
-->
<template>
  <div class="page-list">
    <base-list
      v-bind="listConfig"
      :listData="list"
      v-model:page="pageInfo"
      :listCount="count"
    >
      <!-- list-header 相关的插槽内容 -->
      <template #list-header-hander>
        <el-button
          type="primary"
          size="small"
          icon="el-icon-plus"
          v-if="getHandle('create')"
          @click="handleCreateClick"
          >新增
        </el-button>
        <el-button size="small" icon="el-icon-refresh"></el-button>
      </template>
      <!-- el-table 相关的插槽内容 -->
      <template #status="scope">
        <el-tag :type="scope.row.enable === 1 ? 'success' : 'danger'">
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-tag>
      </template>
      <template #createAt="scope">
        {{ $filters.formatTimeUTC(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTimeUTC(scope.row.updateAt) }}
      </template>
      <template #operations="scope">
        <el-button
          type="text"
          size="mini"
          icon="el-icon-edit"
          v-if="getHandle('update')"
          @click="editClick(scope.row)"
          >编辑</el-button
        >
        <el-button
          type="text"
          size="mini"
          icon="el-icon-delete"
          style="color: #f56c6c"
          v-if="getHandle('delete')"
          @click="deleteClick(scope.row)"
          >删除
        </el-button>
      </template>
    </base-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import BaseList from "@/components/BaseList";
import { getPageNameHandle } from "@/utils/getMenuHandle";

export default defineComponent({
  name: "PageList",
  props: {
    listConfig: {
      type: Object,
      require: true,
    },
    pageName: {
      type: String,
      require: true,
    },
  },
  emits: ["createClick", "editClick"],
  setup(props, { emit }) {
    // 获取列表数据和数据量的相关内容
    const store = useStore();
    const pageInfo = ref({ currentPage: 1, pageSize: 10 });
    watch(pageInfo, () => getPageList());

    const getPageList = (queryInfo: any = {}) => {
      // if (getHandle("query")) return;
      console.log(queryInfo);
      store.dispatch("systemModule/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo,
        },
      });
    };
    getPageList();

    const list = computed(
      () => store.state.systemModule[`${props.pageName}List`]
    );
    const count = computed(
      () => store.state.systemModule[`${props.pageName}Count`]
    );

    // 获取用户权限的函数
    const getHandle = (handleName: string) => {
      return getPageNameHandle(props.pageName as string, handleName);
    };

    // 单项删除函数
    const deleteClick = (ListData: any) => {
      console.log("delete loading...");
      store.dispatch("systemModule/deletePageDataAction", {
        pageName: props.pageName,
        id: ListData.id,
      });
    };

    // 判断和编辑相关函数
    const showDialogList = ref(false);
    const handleCreateClick = () => {
      showDialogList.value = !showDialogList.value;
      emit("createClick", showDialogList.value);
    };
    const editClick = (listItem: any) => {
      console.log("update loading....");
      emit("editClick", listItem);
    };
    return {
      list,
      count,
      pageInfo,
      getHandle,
      getPageList,
      deleteClick,
      editClick,
      handleCreateClick,
      showDialogList,
    };
  },
  components: {
    BaseList,
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
.page-list {
  background: #fff;
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
