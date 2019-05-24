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

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // let isLogin = localTake('userMsg')
  store.commit('settoken', localStorage.getItem('loginType'))
  const isLogin = store.state.loginType
  console.log(`isLogin=${isLogin}`)
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    console.log('不需要登陆')
    next()
  } else {
    console.log('需要登陆')
    if (isLogin === 'true') { // 判断是否已经登录
      console.log(`isLogin=${isLogin}`)
      console.log('已登陆')
      next()
    } else {
      console.log('未登陆')
      if (to.name === login) {
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
      // next()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
