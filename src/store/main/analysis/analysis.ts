/*
 * @Author: tcosfish
 * @Date: 2022-06-14 14:22:44
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-14 15:34:22
 * @FilePath: \vue3admin\src\store\main\analysis\analysis.ts
 */

import { Module } from "vuex";
import { IRootState } from "@/store/types";
import { IAnalysisState } from "./types";
import {
  getCategoryGoodsCount,
  getAddressGoodsSale,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
} from "@/network/main/analysis/analysis";

export const analysisModule: Module<IAnalysisState, IRootState> = {
  namespaced: true,
  state() {
    return {
      addressGoodsSale: [],
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
    };
  },
  getters: {},
  mutations: {
    changeCateGoodsCount(state, categoryGoodsCount: any[]) {
      state.categoryGoodsCount = categoryGoodsCount;
    },
    changeAddressGoodsSale(state, addressGoodsSale: any[]) {
      state.addressGoodsSale = addressGoodsSale;
    },
    changeCategoryGoodsFavor(state, categoryGoodsFavor: any[]) {
      state.categoryGoodsFavor = categoryGoodsFavor;
    },
    changeCategoryGoodsSale(state, categoryGoodsSale: any[]) {
      state.categoryGoodsSale = categoryGoodsSale;
    },
  },
  actions: {
    async getCategoryGoods({ commit }) {
      const goodsCountRes = await getCategoryGoodsCount();
      const goodsSaleRes = await getCategoryGoodsSale();
      const goodsFavorRes = await getCategoryGoodsFavor();
      const addressSaleRes = await getAddressGoodsSale();
      commit("changeCateGoodsCount", goodsCountRes.data);
      commit("changeCategoryGoodsFavor", goodsFavorRes.data);
      commit("changeCategoryGoodsSale", goodsSaleRes.data);
      commit("changeAddressGoodsSale", addressSaleRes.data);
    },
  },
};
