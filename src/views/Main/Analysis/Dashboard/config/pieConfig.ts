/*
 * @Author: tcosfish
 * @Date: 2022-06-14 17:36:35
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 10:27:04
 * @FilePath: \vue3admin\src\views\Main\Analysis\Dashboard\config\pieConfig.ts
 */

import { EChartsOption } from "echarts/types/dist/shared";

export const pieOption: EChartsOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
