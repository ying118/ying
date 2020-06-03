import Vue from 'vue'
import About from './about.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(About)
}).$mount('#about')