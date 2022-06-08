/*
 * @Author: tcosfish
 * @Date: 2022-05-09 17:46:51
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-04 11:57:04
 * @FilePath: \vue3admin\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import MyCache from "../utils/cache";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main", // 初始路由重定向
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/main",
    name: "Main",
    redirect: "/main/analysis/overview",
    component: () => import("@/views/Main/Main.vue"),
  },
  {
    // 根据 url访问不存在的地方
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 添加一个全局守卫
router.beforeEach(async (to, from, next) => {
  const token = MyCache.getCache("token");
  if (!token && to.name !== "Login") {
    next("/login");
  } else {
    next();
  }
  // TODO! 刷新时直接访问, 此时路由还不存在
});

export default router;
