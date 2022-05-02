import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: localStorage.userInfo ? JSON.parse(localStorage.userInfo) : null,
		music: [],
	},
	mutations: {
		setUserLogin(state, payload) {
			state.user = payload;
			localStorage.userInfo = JSON.stringify(state.user);
		},
		addSong(state,payload) {
			state.music.push(payload);
		}
	},
	actions: {},
	modules: {}
})

export default store;
