/*
 * @Author: tcosfish
 * @Date: 2022-06-13 21:56:39
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-13 22:58:41
 * @FilePath: \vue3admin\src\views\Main\Analysis\Dashboard\config\Tangential.echarts.config.ts
 */

import { EChartsOption } from "echarts/types/dist/shared";

export const tangential: EChartsOption = {
  title: {
    text: "Echarts",
    subtext: "hello"
  },
  tooltip: {
    type: "axis",
    axisPointer: {
      type: "cross"
    }
  },
  legend: {
    data: ["销量", "品质"]
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {name: "销量", type: "line", data: [5, 20, 36, 10, 10, 20], color: "#ffd72f"},
    {name: "品质", type: "line", data: [15, 10, 26, 18, 20, 15], color: "#847cff"}
  ]
}
