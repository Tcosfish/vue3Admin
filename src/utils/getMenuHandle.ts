/*
 * @Author: tcosfish
 * @Date: 2022-06-11 11:39:33
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 12:38:20
 * @FilePath: \vue3admin\src\utils\getMenuHandle.ts
 */

import { useStore } from "vuex"

// 路由混乱的情况, 可以自己配置些
const realPageNameMap = new Map([
  ["user", "users"]
])

function _reduceFunc(menus: any, permissions: string[]) {
  for(const key in menus) {
    const menu = menus[key]
    if(menu.type === 1 || menu.type === 2) {
      _reduceFunc(menu.children, permissions)
    } else {
      permissions.push(menu.permission)
    }
  }
}

export function getMenuHandle(userMenu: any) {
  const permissions: string[] = []
  _reduceFunc(userMenu, permissions)
  return permissions
}

export function getPageNameHandle(pageName: string, handleName: string) {
  const store = useStore()
  const realPageName = realPageNameMap.get(pageName) ?? pageName
  const permissions: string[] = store.state.loginModule.userMenuHandle
  const verifyPermission = `system:${realPageName}:${handleName}`
  return !! permissions.find(permission => permission === verifyPermission)
}
