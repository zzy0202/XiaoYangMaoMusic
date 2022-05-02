import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user:localStorage.userInfo?JSON.parse(localStorage.userInfo):null,
  },
  mutations: {
    setUserLogin(state,payload) {
      state.user =payload;
      localStorage.userInfo = JSON.stringify(state.user);
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store;
