<!--1）不建议template的内容层次太深2）template内必须包含唯一的根节点作为父容器, div就是一个很好的选择-->
<!--template内部组件必须是weex官方提供的组件-->
<template>
    <div class="wrapper">

        <div class="tabbar">
            <text @click="jump('/index')">index</text>
            <text @click="jump('/home')">home</text>
        </div>
        <div class="content">
        </div>

    </div>
</template>

<script>

</script>

<style scoped>
    /*@import "../style/home.css";*/
    .wrapper {
        top: 100px;
        justify-content: space-around;
        flex-direction: row;
    }
    .tabbar {
        width: 300px;

        align-self: center;
    }
    .content {
        top :300px;
        align-self: center;
    }
</style>

