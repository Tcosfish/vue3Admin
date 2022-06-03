<!--
 * @Author: tcosfish
 * @Date: 2022-05-31 17:12:17
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-01 23:54:56
 * @FilePath: \vue3admin\src\components\BaseNavMain\src\NavMenu.vue
-->
<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      class="nav-main"
      background-color="#123456"
      text-color="#fff"
      :default-active="$route.path"
      :collapse="collapse"
      :collapse-transition="false"
      :unique-opened="true"
    >
      <template v-for="item in userMenu" :key="item.id">
        <!-- 一级菜单 -->
        <template v-if="item.type === 1">
          <el-submenu :index="item.url">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span> {{ item.name }}</span>
            </template>
            <!-- 子一级菜单 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.url"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 二级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.url">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }} -- 2</span>
          </el-menu-item>
        </template>
        <!-- 身份特殊选项 -->
        <template v-else> 暂无内容 </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NavMenu",
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useStore();
    const userMenu = store.state.loginModule.userMenu;

    const router = useRouter();
    const handleMenuItemClick = (item: any) => {
      router.push(item.url);
    };

    return {
      userMenu,
      handleMenuItemClick,
    };
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
.nav-menu {
  color: white;
}
.logo {
  height: 50px;
  width: 100%;
  min-width: 190px;
  display: flex;
  padding: 5px 10px;
  box-sizing: border-box;
  justify-content: space-between;
}
.logo img {
  width: 40px;
  height: 40px;
}
.logo .title {
  width: 120px;
  box-sizing: border-box;
  padding: 4px;
  font-weight: 600;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
}
.nav-main {
  background: #123456;
  width: 100%;
}
</style>
