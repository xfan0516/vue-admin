import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main/index.vue'
Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    component: Main,
    meta: { title: '首页' },
    children: [
      {
        path: '/home',
        component: () => import('@/pages/Home/index.vue'),
        meta: {
          rating: 0,
          parent: '/home',
          title: '首页'
        }
      },
      // {
      //   path: '/changePwd',
      //   component: () => import('@/pages/user/changePwd'),
      //   meta: {
      //     rating: 0,
      //     parent: '/changePwd',
      //     title: '修改密码'
      //   }
      // },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
