<!--1）不建议template的内容层次太深2）template内必须包含唯一的根节点作为父容器, div就是一个很好的选择-->
<!--template内部组件必须是weex官方提供的组件-->
<template>
    <div class="wrapper">
        <app-header></app-header>
        <div class="content">
            <!--<textarea class="textarea" v-bind:style="{ height: hh+'px' }" v-bind="{rows:row}" @return="returnKey" ></textarea>-->
            <textarea class="textarea"></textarea>
        </div>
    </div>
</template>

<script scoped>
    import AppHeader from '../components/app-header.vue'
    var modal = weex.requireModule('modal')
    export default {
        components: {
            AppHeader
        },
        data () {
            return {
//                hh: 100
            }
        },
        methods: {
//            returnKey (){
//                this.hh += 70,
//                modal.toast({
//                    message: this.hh +'px',
//                    duration: 0.1
//                })
//            }

        }
    }

</script>

<style>
    .wrapper {
        top:120px;
    }
    .content {
        background-color: antiquewhite;
        height: 1080px;
    }
    .textarea {
        background-color: silver;
        height: 500px;
    }
</style>