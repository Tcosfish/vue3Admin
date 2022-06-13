<!--
 * @Author: tcosfish
 * @Date: 2022-06-01 22:22:47
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-13 22:21:44
 * @FilePath: \vue3admin\src\views\Main\Analysis\Dashboard\Dashboard.vue
-->
<template>
  <div class="dashboard">
    <div
      class="columnar"
      style="height: 600px; width: 600px"
      ref="columnar"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import { useEcharts } from "@/hooks/use-echarts";

import { tangential } from "./config/tangential.echarts.config";

export default defineComponent({
  name: "Dashboard",
  setup() {
    const columnar = ref<HTMLElement>();
    onMounted(() => {
      const echartsInstance = useEcharts(
        columnar.value as HTMLElement,
        "light",
        { renderer: "svg" } // TODO 渲染器选择 SVG(内存占用小, 适合移动端, 缩放不模糊)/canvas(适合数据量大, 利于视觉特效)
        // TODO 一般用 SVG渲染吧, 需要绘制的东西多, 数量量大使用 canvas
      );
      echartsInstance.setOption(tangential);
    });
    return {
      columnar,
    };
  },
});
</script>

<style scoped></style>
