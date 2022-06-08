/*
 * @Author: tcosfish
 * @Date: 2022-06-04 11:42:53
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-04 12:56:36
 * @FilePath: \vue3admin\src\components\BaseNavBreadcrumb\utils\getBreadcrumbs.ts
 */

import { IBreadcrumb } from "../types";
import router from "@/router";

// 这个函数是为了动态注册模型具备一级菜单的路由数据做准备的, 目前无法使用
// path: 当前路由地址, startPath: 面包屑将从路径哪个开始
// 比如 ("/main/analysis/overview", 2), 便是从 analysis 开始
export function getBreadcrumbs(path: string, startPath = 1) {
  const result: IBreadcrumb = [];
  const paths = path.split("/").slice(startPath);

  // 1. 将 paths 中各元素的首字母大写 -- utils文件夹中应该多一个首字母大写的工具函数
  // 2. 拿到动态注册后的 router.routes(也许大概是这样表示的)
  // 3. 使用 paths 中的元素去匹配 routes, 找到 path对应的 route
  // 4. 拿到 route 中的 meta.title 和 path
  // 5. 将 {title: route.meta.title, path: route.path} 添加到 result 中

  return result;
}
