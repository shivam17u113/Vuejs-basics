<template>
  <div >
    <h1>user id is {{ id }}</h1>
    <h2>name is {{name }}</h2>
    <h3>password is {{passwrod}}</h3>
  </div>
</template>

<script>
export default {
 
  data () {
    return {
     id:'none',
     name:'',
     passwrod:"",
     
    }
  },
  created() {
if(!this.$store.state.token)
{
this.$router.push({name:'REGISTER'})
}

   // alert(this.$store.state.token)
    // this is used to access the parameters passed in query
this.id= this.$route.params.id
console.log('query is here', this.$route.query.name)

// accessing the query parameters
this.name= this.$route.query.name
this.passwrod=this.$route.query.password
  },
}
</script>

<style>

</style>
