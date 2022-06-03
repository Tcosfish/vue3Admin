/*
 * @Author: tcosfish
 * @Date: 2022-05-17 22:12:49
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-22 17:20:24
 * @FilePath: \vue3admin\vue.config.js
 */
module.exports = {
  publicPath: process.env.NODE_DEV === "production" ? "" : "/",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:5000",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
  },
};
