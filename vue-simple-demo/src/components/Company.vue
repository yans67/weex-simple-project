<!--1）不建议template的内容层次太深2）template内必须包含唯一的根节点作为父容器, div就是一个很好的选择-->
<!--template内部组件必须是weex官方提供的组件-->
<template>
    <div>
      <router-link to="/index">index</router-link>
      <h1>hello company</h1>
    </div>
</template>

<style>

</style>

<script>

    export default {
      data () {
        return {
        }
      },
      methods: {
      }
    }

</script>
