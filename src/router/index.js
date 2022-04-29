import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HeaderMusicPage from "@/views/HeaderMusicPage";
import HeaderMvPage from "@/views/HeaderMvPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[{
      path:'',
      name:"HeaderMusicPage",
      component:HeaderMusicPage,
    },{
      path: 'mv',
      name:"HeaderMVPage",
      component: HeaderMvPage,
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
