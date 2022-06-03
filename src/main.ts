/*
 * @Author: tcosfish
 * @Date: 2022-05-09 17:46:51
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-31 16:44:04
 * @FilePath: \vue3admin\src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "normalize.css";
import "./assets/less/index.less";

const app = createApp(App);

app.use(ElementPlus);
app.use(store).use(router).mount("#app");

store.dispatch("loginModule/setStorage");
