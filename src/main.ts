/*
 * @Author: tcosfish
 * @Date: 2022-05-09 17:46:51
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-07 22:20:05
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
import { globalRegister } from "./global";

const app = createApp(App);

app.use(ElementPlus);
app.use(globalRegister);
app.use(store);
store.dispatch("loginModule/setStorage");
app.use(router);
app.mount("#app");
