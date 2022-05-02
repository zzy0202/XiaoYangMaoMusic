import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HeaderMusicPage from "@/views/HeaderMusicPage";
import HeaderMvPage from "@/views/HeaderMvPage";
import HomeHeaderRadio from "@/views/HeaderRadioPage";
import HeaderRadio from "@/views/HeaderRadioPage";
import HeaderRadioPage from "@/views/HeaderRadioPage";
import Search from "@/views/Search";
import SongListMusic from "@/views/SongListMusic";
import MvVideoPage from "@/views/MvVideoPage";
import MySongList from "@/views/MySongList";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		children: [{
			path: '',
			name: "HeaderMusicPage",
			component: () => import(/* webpackChunkName: "Home" */ '../views/HeaderMusicPage.vue')
		}, {
			path: 'mv',
			name: "HeaderMVPage",
			component: () => import(/* webpackChunkName: "HeaderMvPage" */ '../views/HeaderMvPage.vue'),
		}, {
			path: 'radio',
			name: "HeaderRadioPage",
			component: () => import(/* webpackChunkName: "HeaderRadioPage" */ '../views/HeaderRadioPage.vue'),
		}, {
			path: '/search/:keyword',
			name: "Search",
			component: () => import(/* webpackChunkName: "Search" */ '../views/Search.vue'),
		}, {
			path: '/songList/:id',
			name: "SongList",
			component: () => import(/* webpackChunkName: "SongList" */ '../views/SongListMusic.vue'),
		}, {
			path: '/mv/:id',
			name: 'Mv',
			component: () => import(/* webpackChunkName: "MvVideoPage" */ '../views/MvVideoPage.vue'),
		}, {
			path: '/mySongList',
			name: "MySongList",
			component: () => import(/* webpackChunkName: "MySongList" */ '../views/MySongList.vue'),
		}]
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default router
