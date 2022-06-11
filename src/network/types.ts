/*
 * @Author: tcosfish
 * @Date: 2022-06-11 13:16:23
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-11 13:17:24
 * @FilePath: \vue3admin\src\network\types.ts
 */

export interface IDataType<T = any> {
  code: number;
  data: T;
}
