import Vue from 'vue'
import './cube-ui/cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import './store/actions'
import LyTab from 'ly-tab'

// 字体图标
import './static/css/style.css'

import 'amfe-flexible'

Vue.config.productionTip = false
Vue.use(LyTab)

// 路由守卫
router.beforeEach((to, from, next) => { // 无论刷新，跳转路由，第一个进入路由前置钩子函数
  // console.log(store.state.userInfo)
  // console.log(1)
  // store.commit('settoken', localStorage.getItem('token'))
  store.commit('settoken', localStorage.getItem('loginType'))
  if (to.meta.requireAuth) { // 判断时候需要登陆 false需要登陆，true不要登陆
    next()
  } else {
    if (store.state.loginType) {
      next()
    } else {
      // next({
      //   path: '/login',
      //   query: {
      //     redirect: to.fullPath
      //   }
      // })
    }
    // next({
    //   path: '/login',
    //   query: {
    //     redirect: to.fullPath
    //   }
    // })
    // if (store.state.token) {
    //   next()
    // } else {
    //   next({
    //     path: '/login',
    //     query: {
    //       redirect: to.fullPath
    //     }
    //   })
    // }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
