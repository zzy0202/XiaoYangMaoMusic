import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont.css'
import router from './router'
import store from './store'
import './assets/iconfont.css'
import {Pagination,Tabs,TabPane} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import APlayer from '@moefe/vue-aplayer';

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});

const eventBus = new Vue();
Vue.prototype.$eventBus = eventBus;
Vue.config.productionTip = false
Vue.use(Pagination);
Vue.use(Tabs);
Vue.use(TabPane);
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
