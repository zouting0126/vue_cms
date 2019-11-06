import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import cart from '@/views/cart.vue'
import member from '@/views/member.vue'
import search from '@/views/search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:Home
  },
  {
    path:"/cart",
    component:cart
  },
  {
    path:"/member",
    component:member
  },
  {
    path:"/search",
    component:search
  }
]

const router = new VueRouter({
  routes
})

export default router
