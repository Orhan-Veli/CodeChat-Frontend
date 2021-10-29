import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Table from '../views/Table.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
const routes = [
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Table',
    name: 'Table',
    component: Table
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  { path: '/Home/:categoryId/:categoryName',name:'Home',component: () => import('../views/Home.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
