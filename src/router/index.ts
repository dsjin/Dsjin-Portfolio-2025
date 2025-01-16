import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: () => import('../views/AboutMeView.vue'),
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkView.vue'),
    },
  ],
  scrollBehavior() {
    return new Promise(resolve => {
      resolve({
        left: 0,
        top: 0,
      })
    })
  },
})

export default router
