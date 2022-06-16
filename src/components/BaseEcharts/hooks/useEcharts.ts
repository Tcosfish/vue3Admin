/*
 * @Author: tcosfish
 * @Date: 2022-06-14 17:13:34
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 13:29:53
 * @FilePath: \vue3admin\src\components\BaseEcharts\hooks\useEcharts.ts
 */

import * as echarts from "echarts";

import chinaMapData from "../data/china.json";

echarts.registerMap("china", chinaMapData);

/**
 * @description: 进一步封装了 echarts
 * @param {HTMLElement} el: 真实 DOM
 * @param {HTMLElement} theme: 主题
 * @param {HTMLElement} initOptions: 初始化设置
 * @return {*} echart实例, 设置方法
 */
export default function (
  el: HTMLElement,
  theme = "light",
  initOptions: any = { renderer: "svg" }
) {
  const echartInstance = echarts.init(el, theme, initOptions);

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options);
  };

  // 宽度改变
  window.addEventListener("resize", () => {
    echartInstance.resize();
  });

  // aside引起的变化
  const updateSize = () => {
    echartInstance.resize();
  };

  return {
    echartInstance,
    setOptions,
    updateSize,
  };
}
