//#3. main.js添加MUI扩展的样式，导入并挂载路由
import Vue from 'vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
import app from "./App.vue"
import VueRouter from 'vue-router'
import router from "./router"

Vue.use(VueRouter)
Vue.use(Mint);

new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    render:e=>e(app),
    router:router
})