<template>
  <div >
   
   <input type="text" value="name" v-model="register.name" placeholder="name">
   <br>
   <input type="password" value="password" v-model="register.password" placeholder="password">
<br>
<input type="button" value="Login" @click="save">
  </div>
</template>

<script>

import { eventBus } from "../main";
export default {
 
  data () {
    return {    
     register:{
         name:'',
         password:"",
     },
     token:"12345apsp"

    }
  },
  methods: {
      save()
      {
console.log('register ',this.register) 

// this is used to set value for any field from store
this.$store.state.token='shivam_dates_ankita'

// this is used to go to another page
// in this case we are using the name of router for redirecting 
// we are passing the parametes in query 
// this is easy way to pass 

//we can also pass the query
this.$router.push({
  name:'USER',
  params:{id:12},
  query:
  {   name:this.register.name,
    password:this.register.password
  }

})

  // OR
  // in this case we are using the url of router for redirecting

 // **** // this.$router.push('/user')
      }
  },
}
</script>

<style>

</style>
