<template>
  <div >
    <h1>user details</h1>
  </div>
</template>

<script>
export default {
 
  data () {
    return {
     
    }
  },
  created() {
    if(!this.$store.state.token)
{
this.$router.push({name:'REGISTER'})
}
  },
}
</script>

<style>

</style>
