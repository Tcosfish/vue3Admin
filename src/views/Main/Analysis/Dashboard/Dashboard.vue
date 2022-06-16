<!--
 * @Author: tcosfish
 * @Date: 2022-06-01 22:22:47
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-16 13:25:07
 * @FilePath: \vue3admin\src\views\Main\Analysis\Dashboard\Dashboard.vue
-->
<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <base-card :title="'分类商品数量'" style="width: 100%">
          <pie-echart :pieData="pieData"></pie-echart>
        </base-card>
      </el-col>
      <el-col :span="10">
        <base-card :title="'不同城市商品销量'" style="width: 100%">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </base-card>
      </el-col>
      <el-col :span="7">
        <base-card :title="'分类商品数量(玫瑰图)'" style="width: 100%">
          <rose-echart :roseData="pieData"></rose-echart>
        </base-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top: 20px">
      <el-col :span="12">
        <base-card :title="'nihao'">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </base-card>
      </el-col>
      <el-col :span="12">
        <base-card :title="'nihao'">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </base-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

import { tangential } from "./config/tangential.echarts.config";
import { pieOption } from "./config/pieConfig";
import { barOption } from "./config/barOption";

import BaseCard from "@/components/BaseCard";
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart,
} from "@/components/BaseEcharts/cpns";

export default defineComponent({
  name: "Dashboard",
  setup() {
    const store = useStore();
    store.dispatch("analysisModule/getCategoryGoods");
    let pieData = computed(() =>
      store.state.analysisModule.categoryGoodsCount.map((item: any) => ({
        name: item.name,
        value: item.goodsCount,
      }))
    );

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];
      const categoryGoodsSale = store.state.analysisModule.categoryGoodsSale;
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name);
        values.push(item.goodsCount);
      }
      return {
        xLabels,
        values,
      };
    });

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];
      const categoryGoodsFavor = store.state.analysisModule.categoryGoodsSale;
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name);
        values.push(item.goodsCount);
      }
      return {
        xLabels,
        values,
      };
    });

    const addressGoodsSale = computed(() => {
      return store.state.analysisModule.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count };
      });
    });

    return {
      pieData,
      tangential,
      pieOption,
      barOption,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
    };
  },
  components: {
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart,
    BaseCard,
  },
});
</script>

<style scoped></style>
