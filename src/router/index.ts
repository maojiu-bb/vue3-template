import { createRouter, createWebHistory } from 'vue-router'

// import routes links
import routes from './router'

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
