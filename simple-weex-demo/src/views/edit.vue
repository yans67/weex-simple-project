<!--1）不建议template的内容层次太深2）template内必须包含唯一的根节点作为父容器, div就是一个很好的选择-->
<!--template内部组件必须是weex官方提供的组件-->
<template>
    <div class="wrapper">
        <app-header></app-header>
    </div>
</template>

<script scoped>
    import AppHeader from '../components/app-header.vue'
    export default {
        components: {
            AppHeader
        },
        data () {

        },
        methods: {}
    }

</script>

<style>
    .wrapper {
        /*top:120px;*/
    }
</style>