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
      path: '/home1',
      name: 'home1',
      component: () => import('views/Home/Home1')
    },
    {
      path: '/home2',
      name: 'home2',
      component: () => import('views/Home/Home2')
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
