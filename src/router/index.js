import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import authGuard from './auth-guard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetups',
    name: 'MeetUps',
    component: () =>
      import('../views/MeetUps')
  },
  {
    path: '/meetup/:id',
    name: 'MeetUp',
    props: true,
    component: () =>
      import('../views/MeetUpSingle')
  },
  {
    path: '/organize',
    name: 'CreateMeetUps',
    beforeEnter: authGuard,
    component: () =>
      import('../views/CreateMeetUp')
  },
  {
    path: '/profile',
    name: 'Profile',
    beforeEnter: authGuard,
    component: () =>
      import('../views/Profile')
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () =>
      import('../views/SignIn')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () =>
      import('../views/SignUp')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
