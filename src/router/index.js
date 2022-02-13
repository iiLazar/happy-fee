import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/methodology',
    name: 'Methodology',
    component: () => import('../views/Methodology.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
