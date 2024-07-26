import localCache from '@/plugins/cache'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: HomeView
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/APIs&Pricing',
      name: 'APIs&Pricing',
      // component: HomeView
      component: () => import('../views/Api.vue'),
    },
    {
      path: '/Blog',
      name: 'Blog',
      // component: HomeView
      component: () => import('../views/Blog.vue'),
    },


  ]
})
router.beforeEach((to, from) => {
  // 当访问地址出现不存在页面时，将页面重定向到登录页
  if (!to.name) {
    if (to.path) return '/'
  }

})
export default router
