import Vue from 'vue'
import Router from 'vue-router'
// import { getToken } from '@/utils/auth'
// import store from '../store'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('@/views/moddle/index'),
    children: [
      {
        path: '/',
        components: {
          middle: () => import('@/views/moddle/middle/Index'),
          left: () => import('@/views/moddle/left/Index'),
          right: () => import('@/views/moddle/right/Index'),
          // 左侧全屏
          left_source:()=> import('@/views/moddle/left/full-screen'),

        },
      },
    ]
  },
  // 三屏全屏切换路由
  // {
  //   path: '/',
  //   component: () => import('@/views/Shcc/index'),
  //   children: [
  //     {
  //       path: '/shcc',
  //       components: {
  //         middle: () => import('@/views/Shcc/middle'),
  //         left: () => import('@/views/Shcc/left'),
  //         right: () => import('@/views/Shcc/right'),
  //       },
  //     },
  //   ]
  // },
]
const Rout = new Router({
  // base: process.env.BASE_URL,
  routes,
})
// 路由白名单
// const whiteList = ['/Login',]
// Rout.beforeEach(async (to, from, next) => {
//   const hasToken = getToken()
//   if (hasToken) {
//     if (to.path === '/Login') {
//       next({ path: '/' })
//     } else {
//       if (!store.getters.userType) {
//         await store.dispatch('user/whoami')
//       }
//       next()
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next(`/Login?redirect=${ to.path }`)
//     }
//   }
// })
export default Rout
