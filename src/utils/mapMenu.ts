/*
 * @Author: tcosfish
 * @Date: 2022-06-01 22:43:23
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-04 15:59:26
 * @FilePath: \vue3admin\src\utils\mapMenu.ts
 */

import { IBreadcrumb } from "@/components/BaseNavBreadcrumb";
import { RouteRecordRaw } from "vue-router";

export function mapMenuToRouter(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  // 1. 先加载所有的 routes
  const allRoutes: RouteRecordRaw[] = [];
  // 文件路径, 往下查找子子级,  正则匹配
  const routeFiles = require.context("../router/main", true, /\.ts$/);
  routeFiles.keys().forEach((key) => {
    // const routePath: string = "../router/main" + key.split(".")[1];
    // const route = require(routePath);         // 一模一样, 反而报错, 这是什么鬼?
    const route = require("../router/main" + key.split(".")[1]);
    allRoutes.push(route.default);
  });
  // console.log(allRoutes);

  // 2. 根据菜单获取需要添加的 routes
  function _reduceGetRoute(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((item) => item.path === menu.url);
        if (route) {
          routes.push(route);
        }
      } else {
        _reduceGetRoute(menu.children);
      }
    }
  }

  _reduceGetRoute(userMenu);

  return routes;
}

export function getBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb = [];
  temporaryTool(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

export function temporaryTool(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = temporaryTool(menu.children ?? [], currentPath);
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name });
        breadcrumbs?.push({ name: findMenu.name });
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}
