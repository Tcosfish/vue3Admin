<!--
 * @Author: tcosfish
 * @Date: 2022-06-16 12:45:01
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 13:04:34
 * @FilePath: \vue3admin\src\components\BaseEcharts\cpns\src\LineEchart.vue
-->
<template>
  <base-echarts :echartConfig="pieConfig" :height="'450px'" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import BaseEcharts from "@/components/BaseEcharts";

export default defineComponent({
  name: "LineEchart",
  props: {
    xLabels: {
      type: Array,
      require: true,
    },
    values: {
      type: Array,
      require: true,
    },
  },
  setup(props) {
    let pieConfig = computed(() => {
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {},
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: props.xLabels,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "分别销量",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
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
