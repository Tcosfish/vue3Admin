<!--
 * @Author: tcosfish
 * @Date: 2022-06-16 13:06:03
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 13:09:27
 * @FilePath: \vue3admin\src\components\BaseEcharts\cpns\src\BarEchart.vue
-->
<template>
  <base-echarts :echartConfig="pieConfig" :height="'450px'" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import * as echarts from "echarts";
import BaseEcharts from "@/components/BaseEcharts";

export default defineComponent({
  name: "BarEchart",
  props: {
    values: {
      type: Array,
      default: () => [],
    },
    xLabels: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    let pieConfig = computed(() => {
      return {
        xAxis: {
          data: props.xLabels,
          axisLabel: {
            inside: true,
            color: "#fff",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#999",
          },
        },
        dataZoom: [
          {
            type: "inside",
          },
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" },
                ]),
              },
            },
            data: props.values,
          },
        ],
      };
    });

    return {
      pieConfig,
    };
  },
  components: {
    BaseEcharts,
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
