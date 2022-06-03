/*
 * @Author: tcosfish
 * @Date: 2022-05-09 18:51:37
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-18 14:16:12
 * @FilePath: \vue3admin\src\network\axios_demo.ts
 */

import axios from "axios";

console.log("-----");

// axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
//   console.log(res);
//   console.log("GET: ", res.data)
// })

// axios.post('https://jsonplaceholder.typicode.com/posts').then(res => {
//   console.log(res);
//   console.log("POST: ", res.data)
// })

// axios 全局配置选项
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.defaults.timeout = 5000
// axios.defaults.method = 'GET'

// axios.request({
//   url: '/posts',
//   method: 'POST'
// }).then(res => console.log(res))

// axios.all --> promise.all
// axios.all([
//   axios.get('/todos/1'),
//   axios.get('/todos/2'),
// ]).then(res => console.log(res))      // 回来一个数组

// axios拦截器, 比如在 header中添加 token再发送, 或是请求时间较长, 需添加加载动画
// 首参为执行成功的函数, 二参为执行失败的函数
// axios.interceptors.request.use((config) => {
//   // !? config[token] = 'and'
//   return config
// }, (err)=> {
//   console.log('Request Error!')
//   return err
// })

// // 服务器正常返回数据
// axios.interceptors.response.use((res) => {
//   return res.data
// }, (err) => {
//   console.log('Response Error!')
//   return err
// })
