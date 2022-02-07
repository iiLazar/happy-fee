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
  {
    path: '/old',
    name: 'OldHome',
    component: () => import('../views/OldHome.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
