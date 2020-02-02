import Vue from 'vue'
import Router from 'vue-router'

// these are the components we are going to use for routing

/* when the applcation size is very large then we will use lazy routing 
in which we import only those pages to which request is made 
this will increase the performanc as only necessary pages are loaded
*/

const User =resolve =>{
  require.ensure(['./components/User.vue'],()=>
  { resolve(require('./components/User.vue'));
});
}

const NotFound =resolve =>{
  require.ensure(['./components/404'],()=>
  { resolve(require('./components/404'));
});
}

const Register =resolve =>{
  require.ensure(['./components/registration'],()=>
  { resolve(require('./components/registration'));
});
}
const UserDetsils =resolve =>{
  require.ensure(['./components/UserDetails.vue'],()=>
  { resolve(require('./components/UserDetails.vue'));
});
}





Vue.use(Router)

export default new Router({
  routes: [
    {

      path: '/user/:id',
      name: 'USER',
      component: User
    },
    {
      path: '/details',
      name: 'SECOND',
      component: UserDetsils
    },
    {
        path: '',
        name: 'REGISTER',
        component: Register
      },
      // for any case where page is not avaialbe
      {
        path: '*',
        name: 'NOTFOUND',
        component: NotFound
      }
  

  ],
  // used to remove # from the url
  mode:"history"
})