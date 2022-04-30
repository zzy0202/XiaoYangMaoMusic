import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // user:JSON.parse(localStorage.user)?JSON.parse(localStorage.user):null,
    user:JSON.parse(localStorage.userInfo)
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
