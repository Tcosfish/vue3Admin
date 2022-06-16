<!--
 * @Author: tcosfish
 * @Date: 2022-06-16 11:07:17
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 12:14:36
 * @FilePath: \vue3admin\src\components\BaseEcharts\cpns\PieEchart\src\PieEchart.vue
-->
<template>
  <base-echarts :echartConfig="pieConfig" :height="'450px'" />
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import BaseEcharts from "@/components/BaseEcharts";
import { IEchartDataType } from "../types";

export default defineComponent({
  name: "PieEcharts",
  props: {
    pieData: {
      type: Array as PropType<IEchartDataType[]>,
      default: () => [],
    },
  },
  setup(props) {
    let pieConfig = computed(() => {
      return {
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
            data: props.pieData,
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
