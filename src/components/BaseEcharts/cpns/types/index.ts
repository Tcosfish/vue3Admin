/*
 * @Author: tcosfish
 * @Date: 2022-06-16 11:25:46
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 13:01:41
 * @FilePath: \vue3admin\src\components\BaseEcharts\cpns\types\index.ts
 */

export interface IEchartDataType {
  name: string;
  value: any;
}

export interface ILineDataType<T = any> {
  data: T[];
}
