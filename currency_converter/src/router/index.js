import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/admin/RegisterView.vue'
import LoginView from '../views/admin/LoginView.vue'
import AddCurrenciesView from '../views/admin/AddCurrenciesView.vue'
import GetCurrenciesView from '../views/admin/GetCurrenciesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
      
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
      
    },
    {
      path: '/add/currencies',
      name: 'add',
      component: AddCurrenciesView
      
    },
    {
      path: '/get/currencies',
      name: 'get',
      component: GetCurrenciesView
      
    }
  ]
})

export default router
