/*
 * @Author: tcosfish
 * @Date: 2022-06-14 15:19:37
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-14 15:28:53
 * @FilePath: \vue3admin\src\network\main\analysis\analysis.ts
 */

import coderWhyApi from "@/network";

enum AnalysisApi {
  CategoryGoodsCount = "/goods/category/count",
  CategoryGoodsSale = "/goods/category/sale",
  CategoryGoodsFavor = "/goods/category/favor",
  AddressGoodsSale = "/goods/address/sale",
}

export function getCategoryGoodsCount() {
  return coderWhyApi.get({
    url: AnalysisApi.CategoryGoodsCount,
  });
}

export function getCategoryGoodsSale() {
  return coderWhyApi.get({
    url: AnalysisApi.CategoryGoodsSale,
  });
}

export function getCategoryGoodsFavor() {
  return coderWhyApi.get({
    url: AnalysisApi.CategoryGoodsFavor,
  });
}

export function getAddressGoodsSale() {
  return coderWhyApi.get({
    url: AnalysisApi.AddressGoodsSale,
  });
}
