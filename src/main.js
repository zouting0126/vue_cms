//#3. main.js添加MUI扩展的样式，导入并挂载路由
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
// import "./lib/mui/css/mui.css"
// import "./lib/mui/css/icons-extra.css"
// import app from "./App.vue"
// import VueRouter from 'vue-router'
// import router from "./router"
Vue .config.productionTip = false
import 'mui/css/mui.css'
import 'mui/css/iconfont.css'



import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
// Vue.use(VueRouter)
// Vue.use(Mint);

// var vm = new Vue({
//     el: '#app',
//     data: {
//         msg: '123'
//     },
//     render:e=>e(app),
//     router:router
// })
// console.log(vm)