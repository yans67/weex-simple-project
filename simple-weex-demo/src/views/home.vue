<!--1）不建议template的内容层次太深2）template内必须包含唯一的根节点作为父容器, div就是一个很好的选择-->
<!--template内部组件必须是weex官方提供的组件-->
<template>
    <div class="wrapper">

        <app-header></app-header>


        <!--列表-->
        <list class="table" @loadmore="loadmore" loadmoreoffset="0">

            <header class="header">
                <text class="header-text">我是标题</text>
            </header>


            <cell class="cell" v-for="num in rows">
                <div class="panel" >
                    <text class="item-title">row {{num}}</text>
                </div>
            </cell>

            <loading>
                <text>正在加载...</text>
            </loading>

        </list>

    </div>
</template>

<script>

    import AppHeader from '../components/app-header.vue'
    export default {
        components: {
            AppHeader
        },
        data (){
            return {
                rows:[1,2,3,4,5,6,7,8,9,10,11]
            }
        },
        methods :{

        }
    }
</script>

<style scoped>
    .wrapper {
        /*top:120px;*/
    }
    .table {
        height: 800px;
        /*top: 120px;*/
        background-color: red ;
    }
    .header {
        background-color: #0088fb;
        height: 50px;
    }
    .header-text {
        /*margin：0 auto;*/
    }
    .cell {
        justify-content: center;
        border-style:none none solid none;
        border-bottom-width: 1px;
        border-bottom-color: #c0c0c0;
        height: 84px;
        padding: 20px;
    }
</style>

