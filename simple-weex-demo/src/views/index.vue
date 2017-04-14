<template>
    <div class="wrapper">
        <div class="container" v-bind:style="{ height:containerH + 'px' }">

            <input ref="input" class="input" type="text">

            <list class="list" v-bind:style="{ height: listH + 'px' , width: listW + 'px' }" v-if="isListShow">
                <cell class="cell" v-for="item in lists">
                    <text>{{ item }}</text>
                </cell>
            </list>

            <div class="y-button" @click="btnClick" v-if="isButtonShow">
                <text>New</text>
            </div>

        </div>
    </div>
</template>

<script>
    const LOADMORE_COUNT = 1;
    var modal = weex.requireModule('modal')
    export default {
        components: {
        },
        data () {
            return {
                containerH: WXEnvironment.deviceHeight,
                lists: [],
                listH: 4 * 85,
                listW: WXEnvironment.deviceWidth,
                inputW: WXEnvironment.deviceWidth,
                isButtonShow: true,
                isListShow: false,
                isInputShow: false
            }
        },
        methods: {
            btnClick (){
                this.isShow = false ;
                this.lists.push(this.lists.length ++ ) ;
            }
        },
        watch: {
            lists: {
                handler: function(){
                    console.log('lists 内容发生改变')
                }
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        /*方便调试*/
        /*top: 120px;*/
        /*background-color: silver;*/
    }
    .container {
        /*background-color: #afddff;*/
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items: center;
    }
    /* -- 输入 -- */
    .input {
        font-size: 50px;
        margin-top: 50px;
        margin-left: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
        color: #666666;
        border-width: 2px;
        border-style: solid;
        border-color: #41B883;
    }

    /* -- 列表 -- */
    .list {
        /*background-color: silver;*/
        position: relative;
        top: 120px;;
    }

    /* -- 行 -- */
    .cell {
        justify-content: center;
        border-style:none none solid none;
        border-bottom-width: 1px;
        border-bottom-color: #c0c0c0;
        height: 84px;
        /*padding: 20px;*/
    }

    /* -- 按钮 -- */
    .y-button {
        top: 400px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        background-color: #20a0ff;
        width: 200px;
        height: 200px;
        border-radius: 100px;
    }
    .y-button:focus, .y-button:hover {
        background-color: #20a0ff;
        border-color: #20a0ff;
        color: #fff
    }
    .y-button.is-active, .y-button:active{
        background-color: #1d90e6;
        border-color: #1d90e6;
        color: #fff
    }

</style>