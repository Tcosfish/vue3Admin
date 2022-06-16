/*
 * @Author: tcosfish
 * @Date: 2022-06-14 16:24:26
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 10:58:36
 * @FilePath: \vue3admin\src\views\Main\Analysis\Dashboard\config\simple1.echarts.config.ts
 */

import { EChartsOption } from "echarts/types/dist/shared";

export const simple1: EChartsOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "lighter",
        },
      },
      labelLine: {
        show: false,
      },
      data: [],
    },
  ],
};
