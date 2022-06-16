/*
 * @Author: tcosfish
 * @Date: 2022-06-14 17:43:48
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-14 17:43:48
 * @FilePath: \vue3admin\src\views\Main\Analysis\Dashboard\config\barOption.ts
 */

export const barOption = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      },
    },
  ],
};
