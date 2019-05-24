import Vue from 'vue'
import Router from 'vue-router';
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
      component: Home,
      children: [
        {
          path: 'box',
          component: () => import('components/Children/Box')
        }, {
          path: 'dress',
          component: () => import('components/Children/Dress')
        }, {
          path: 'ele',
          component: () => import('components/Children/Ele')
        }, {
          path: 'food',
          component: () => import('components/Children/Food')
        }, {
          path: 'general',
          component: () => import('components/Children/General')
        }, {
          path: 'hot',
          component: () => import('components/Children/Hot/Hot')
        }, {
          path: 'man',
          component: () => import('components/Children/Man')
        }, {
          path: 'mbaby',
          component: () => import('components/Children/Mbaby')
        }, {
          path: 'shirt',
          component: () => import('components/Children/Shirt')
        }, {
          path: '/',
          redirect: '/home/hot'
        }
      ]
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('views/Recommend/Recommend')
    },
    // {
    //   path: '/home1',
    //   name: 'home1',
    //   component: () => import('views/Home/Home1')
    // }
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
