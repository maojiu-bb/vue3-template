import { createRouter, createWebHistory } from 'vue-router'

// import routes links
import routes from './router'

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + ' | Vue3-Template' // Chnage this to your own site title
  }
  next()
})

export default router
