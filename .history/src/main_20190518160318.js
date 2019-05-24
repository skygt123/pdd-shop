import Vue from 'vue'
import './cube-ui/cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import LyTab from 'ly-tab'
import layer from 'layer'

import 'amfe-flexible'

Vue.config.productionTip = false
Vue.use(LyTab)
Vue.use(layer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
