import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('views/home/Home.vue')
const CateGory = ()=>import('views/category/CateGory.vue')
const Cart = ()=>import('views/cart/Cart.vue')
const ProFile = ()=>import('views/profile/ProFile.vue')

Vue.use(VueRouter)

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:CateGory
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:ProFile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
