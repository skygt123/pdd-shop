import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        showBottomTabBar: true
      }
    },
    {
      path: '/home',
      name: 'homeindex',
      component: Home,
      children: [
        {
          path: 'box',
          component: () => import('components/Children/Box'),
          meta: {
            showBottomTabBar: true,
            requireAuth: true // 判断是否需要登录
          }
        }, {
          path: 'dress',
          meta: {
            showBottomTabBar: true,
            requireAuth: true // 判断是否需要登录
          },
          component: () => import('components/Children/Dress')
        }, {
          path: 'ele',
          meta: {
            showBottomTabBar: true,
            requireAuth: true // 判断是否需要登录
          },
          component: () => import('components/Children/Ele')
        }, {
          path: 'food',
          meta: { showBottomTabBar: true },
          component: () => import('components/Children/Food')
        }, {
          path: 'general',
          meta: { showBottomTabBar: true },
          component: () => import('components/Children/General')
        }, {
          path: 'hot',
          meta: {
            showBottomTabBar: true,
            requireAuth: true // 判断是否需要登录
          },
          component: () => import('components/Children/Hot/Hot')
        }, {
          path: 'man',
          meta: { showBottomTabBar: true },
          component: () => import('components/Children/Man')
        }, {
          path: 'mbaby',
          meta: { showBottomTabBar: true },
          component: () => import('components/Children/Mbaby')
        }, {
          path: 'shirt',
          meta: { showBottomTabBar: true },
          component: () => import('components/Children/Shirt')
        }, {
          path: '/',
          redirect: '/home/hot',
          meta: { showBottomTabBar: true }
        }
      ]
    },
    {
      path: '/recommend',
      name: 'recommend',
      meta: {
        showBottomTabBar: true,
        requireAuth: true // 判断是否需要登录
      },
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
      meta: {
        showBottomTabBar: true,
        requireAuth: true // 判断是否需要登录
      },
      component: () => import('views/Search/Search')
    },
    {
      path: '/search1',
      name: 'search1',
      meta: {
        showBottomTabBar: true,
        requireAuth: true // 判断是否需要登录
      },
      component: () => import('views/Search/Search1')
    },
    {
      path: '/search2',
      name: 'search2',
      meta: {
        showBottomTabBar: true,
        requireAuth: true // 判断是否需要登录
      },
      component: () => import('views/Search/Search2')
    },
    {
      path: '/1',
      name: '1',
      meta: {
        showBottomTabBar: true,
        requireAuth: true // 判断是否需要登录
      },
      component: () => import('views/Search/1')
    },
    {
      path: '/chat',
      name: 'chat',
      meta: { showBottomTabBar: true },
      component: () => import('views/Chat/Chat')
    },
    {
      path: '/me',
      name: 'me',
      meta: { showBottomTabBar: true },
      component: () => import('views/Me/Me')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('views/Me/MeSetting')
    },
    {
      path: '/userdetail',
      name: 'UserDetail',
      component: () => import('views/Me/UserDetail')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('views/Login/Login')
    }
  ]
})
