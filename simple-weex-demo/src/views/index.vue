<template>
    <div class="wrapper">

        <!--<app-header></app-header>-->


        <div class="content">
            <text class="text">暂无数据</text>
        </div>
    </div>
</template>

<script>
    import AppHeader from '../components/app-header.vue'
    const LOADMORE_COUNT = 1
    export default {
        components: {
            AppHeader
        },
        data () {
            return {
                message: 'hello'
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .wrapper {
        top: 120px;
        background-color: silver;
    }
    .content {
        background-color: #afddff;
        display: flex;
        flex-direction: column;
        height: 1200px;
        justify-content: center;
        align-items: center;

    }
</style>