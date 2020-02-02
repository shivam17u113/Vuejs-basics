import Vue from 'vue'
import Router from 'vue-router'

// these are the components we are going to use for routing
import User from './components/User.vue'
import UserDetsils from './components/UserDetails.vue'
import Register from './components/registration'



Vue.use(Router)

export default new Router({
  routes: [
    {

      path: '/user',
      name: 'HelloWorld',
      component: User
    },
    {
      path: '/details',
      name: 'second',
      component: UserDetsils
    },
    {
        path: '',
        name: 'register',
        component: Register
      }
  

  ]
})