import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '@/assets/css/element-variables.scss'
import { lStorage, sStorage, getCookie } from '@/assets/js/storage' // 缓存

Vue.config.productionTip = false
// 缓存
Vue.prototype.$lStorage = lStorage // 永久缓存
Vue.prototype.$sStorage = sStorage // 临时缓存
Vue.prototype.$getCookie = getCookie // Cookie缓存
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
