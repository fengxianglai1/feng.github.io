import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUi from 'element-ui'
import echarts from 'echarts'
import store from './vuex/index'
import http from './get/index.js'



// Vue.prototype.$echarts=echarts
Vue.use(ElementUi)
Vue.prototype.axios = axios

axios.defaults.baseURL = '/api'
Vue.prototype.http = http
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
