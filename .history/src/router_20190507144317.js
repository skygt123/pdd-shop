import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'homeindex',
      component: Home
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('views/Recommend/Recommend')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('views/Search/Search')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('views/Chat/Chat')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('views/Me/Me')
    }
  ]
})
