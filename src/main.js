import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont.css'
import {Pagination} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const eventBus = new Vue();
Vue.prototype.$eventBus = eventBus;
Vue.config.productionTip = false
Vue.use(Pagination);
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
