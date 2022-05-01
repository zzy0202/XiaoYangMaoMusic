import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HeaderMusicPage from "@/views/HeaderMusicPage";
import HeaderMvPage from "@/views/HeaderMvPage";
import HomeHeaderRadio from "@/views/HeaderRadioPage";
import HeaderRadio from "@/views/HeaderRadioPage";
import HeaderRadioPage from "@/views/HeaderRadioPage";
import Search from "@/views/Search";

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
    },{
      path: 'radio',
      name:"HeaderRadioPage",
      component: HeaderRadioPage,
    },{
      path: '/search',
      name:"Search",
      component: Search,
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
