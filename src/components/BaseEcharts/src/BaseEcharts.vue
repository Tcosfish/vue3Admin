<!--
 * @Author: tcosfish
 * @Date: 2022-06-14 16:35:20
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 11:52:34
 * @FilePath: \vue3admin\src\components\BaseEcharts\src\BaseEcharts.vue
-->
<template>
  <div
    class="base-chart"
    ref="baseEchartRef"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType, watchEffect } from "vue";
import * as echarts from "echarts";
import useEchart from "../hooks/useEcharts";

export default defineComponent({
  name: "BaseEcharts",
  props: {
    width: {
      type: String as PropType<string>,
      default: "100%",
    },
    height: {
      type: String as PropType<string>,
      default: "360px",
    },
    theme: {
      type: String,
      default: "light",
    },
    initOptions: {
      type: Object,
      default: () => ({
        renderer: "svg",
      }),
    },
    echartConfig: {
      type: Object as PropType<echarts.EChartsOption>,
      default: () => ({}),
    },
  },
  setup(props) {
    const baseEchartRef = ref<HTMLElement>();
    onMounted(() => {
      if (baseEchartRef.value) {
        const { setOptions } = useEchart(
          baseEchartRef.value,
          props.theme,
          props.initOptions
        );
        watchEffect(() => {
          setOptions(props.echartConfig);
        });
      }
    });
    return {
      baseEchartRef,
    };
  },
});
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
