import { createRouter, createWebHistory } from 'vue-router'
import {HomeView, AboutView, ContactView, ServicesView} from '../views/views'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/About',
      name: 'about',
      component: AboutView
    },
    {
      path: '/ContactUs',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/Services',
      name: 'services',
      component: ServicesView
    }
  ]
})

export default router
