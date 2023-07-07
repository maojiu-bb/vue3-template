import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About/index.vue')
  }
  // Add your routes here
]

export default routes
