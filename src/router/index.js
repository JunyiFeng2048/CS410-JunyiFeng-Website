import { createRouter, createWebHistory } from 'vue-router'
import Homeiew from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homeiew
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkView.vue')
    },
    {
      path: '/projects',
      name: 'projects',

      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
