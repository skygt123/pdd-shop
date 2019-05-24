import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('views/Me/Me')
    }
  ]
})
