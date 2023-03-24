import { createRouter, createWebHistory } from 'vue-router'
import PersonalInfoView from '../views/PersonalInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page1',
      component: PersonalInfoView
    },
    {
      path: '/select-plan',
      name: 'page2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SelectPlanView.vue')
    },
    {
      path: '/add-ons',
      name: 'page3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddOnsView.vue')
    },
    {
      path: '/step4',
      name: 'page4',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Step4View.vue')
    }
  ]
})

export default router
