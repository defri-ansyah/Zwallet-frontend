import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/main/home.vue'
import Login from '../views/main/login.vue'
import Signup from '../views/main/signup.vue'
import Pin from '../views/main/pin.vue'
import Transfer from '../views/main/transfer.vue'
import History from '../views/main/history.vue'
import Forgot from '../views/main/forgot.vue'
import Reset from '../views/main/reset.vue'
import managePhone from '../views/main/manage-phone.vue'
import Profile from '../views/main/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Signup
  },
  {
    path: '/set-pin',
    name: 'pin',
    component: Pin
  },
  {
    path: '/transfer-list',
    name: 'transfer-list',
    component: Transfer
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: Forgot
  },
  {
    path: '/reset',
    name: 'reset',
    component: Reset
  },
  {
    path: '/manage-phone',
    name: 'phone',
    component: managePhone
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
