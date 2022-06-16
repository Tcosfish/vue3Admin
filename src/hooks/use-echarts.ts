/*
 * @Author: tcosfish
 * @Date: 2022-06-13 21:54:30
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-13 22:13:02
 * @FilePath: \vue3admin\src\hooks\use-echarts.ts
 */
import * as echarts from "echarts";

/**
 * @description: 进一步封装了 Echarts, 让 vue文件中没有太多东西
 * @param {any} realDom: 真实 DOM
 * @param {string} theme: 主题
 * @param {any} options: 配置, 一般用来设置渲染器
 * @return {*} Echarts实例
 */
export function useEcharts(realDom: any, theme?: string, options?: any) {
  return echarts.init(realDom, theme, options);
}
