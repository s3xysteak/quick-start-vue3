import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/welcome',
      component: () => import('@/views/home.vue'),
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          component: () => import('@/views/welcome.vue')
        },
        {
          path: '/earth',
          name: 'earth',
          component: () => import('@/views/earth.vue')
        },
        {
          path: '/map',
          name: 'map',
          component: () => import('@/views/map.vue')
        }
      ]
    }
  ]
})

export default router
