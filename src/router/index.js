import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import UserDetailsView from '../views/UserDetailsView.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetailsView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guard de autenticación JWT
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && store.getters.isAuthenticated) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
