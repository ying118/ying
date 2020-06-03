import Vue from 'vue'
import Home from './home.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount('#home')