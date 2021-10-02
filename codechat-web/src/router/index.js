import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    // meta:{
    //   requiresAuth:true
    // }
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  { path: '/Home', component: () => import('../views/Home.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router