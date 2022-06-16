<!--
 * @Author: tcosfish
 * @Date: 2022-06-16 12:30:51
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 12:43:26
 * @FilePath: \vue3admin\src\components\BaseEcharts\cpns\src\RoseEchart.vue
-->
<template>
  <base-echarts :echartConfig="pieConfig" :height="'450px'" />
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import BaseEcharts from "@/components/BaseEcharts";
import { IEchartDataType } from "../types";

export default defineComponent({
  name: "RoseEchart",
  props: {
    roseData: {
      type: Array as PropType<IEchartDataType[]>,
      default: () => [],
    },
  },
  setup(props) {
    let pieConfig = computed(() => {
      return {
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "类别数据",
            type: "pie",
            radius: [10, 100],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: props.roseData,
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
