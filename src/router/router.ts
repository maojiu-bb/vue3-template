import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    component: () => import('@/views/About/index.vue'),
    meta: {
      title: 'About'
    }
  }
  // Add your routes here
]

export default routes
