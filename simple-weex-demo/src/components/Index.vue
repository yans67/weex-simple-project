<template>
  <div class="wrapper">
    <text @click="jumpIndex">index</text>
    <text @click="jumpHome">home</text>
  </div>
</template>

<style>

</style>

<script>
  export default {
      methods: {
          jumpIndex () {
              this.$router.push('index')
          },
          jumpHome () {
              this.$router.push('home')
          }
      }
  }
</script>
