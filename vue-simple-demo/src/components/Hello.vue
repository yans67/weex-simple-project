<template>
  <div>

    <router-link to="index">index</router-link>
    <router-link to="home">home</router-link>
    <router-link to="company">company</router-link>
    <h1 @click="click()">{{ msg }}(alert)</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'hello index'
      }
    },
    methods: {
      click () {
        alert('hello')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
