import Vue from 'vue'
import router from './router/index.js'
import Axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
