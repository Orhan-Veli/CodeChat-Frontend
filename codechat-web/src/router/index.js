import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import ReportedUsersTable from '../views/ReportedUsersTable.vue'
import UsersTable from '../views/UsersTable.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
const routes = [
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/ReportedUsersTable',
    name: 'ReportedUsersTable',
    component: ReportedUsersTable
  },
  {
    path: '/UsersTable',
    name: 'UsersTable',
    component: UsersTable
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
