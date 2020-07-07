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
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/login',
    name: 'Sign up',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/registration',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Registration.vue')
  },
  {
    path: '/reset-password',
    name: 'Forgot Password',
    component: () => import(/* webpackChunkName: "forgot" */ '../views/ForgotPassword.vue')
  },
  {
    path: '/channels-notes',
    name: 'Channel Notes',
    component: () => import(/* webpackChunkName: "channels" */ '../views/ChannelsNotes.vue')
  },
  {
    path: '/channels-add',
    name: 'Add Channel',
    component: () => import(/* webpackChunkName: "channels" */ '../views/ChannelsAdd.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: '/user-account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "users" */ '../views/UserAccount.vue')
  }
]

const router = new VueRouter({
  base : '/lo-notes-api/',
  mode : 'history',
  routes : routes
})

export default router
