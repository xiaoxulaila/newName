import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './http'

Vue.config.productionTip = false


Vue.prototype.$http = http
// 把封装好的http文件引入，方便局部应用


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')