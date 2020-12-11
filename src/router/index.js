import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/organize',
    name: 'CreateMeetUps',
    component: () =>
      import('../views/CreateMeetUp')
  },
  {
    path: '/profile',
    name: 'Profile',
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
