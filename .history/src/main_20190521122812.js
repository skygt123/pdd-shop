import Vue from 'vue'
import './cube-ui/cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import LyTab from 'ly-tab'

// 字体图标
import './static/css/style.css'

import 'amfe-flexible'

Vue.config.productionTip = false
Vue.use(LyTab)

// 路由守卫

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
