<template>
    <div class="wrapper">
        <div class="container" v-bind:style="{ height:containerH + 'px' }">

            <!-- 输入框 -->
            <textarea v-if="isTextareaShow" v-bind:style="{ width:textareaW + 'px'}" class="textarea" type="text" autofocus="true" rows="10"></textarea>

            <!-- 保存按钮 -->
            <div class="y-button--save" @click="save" v-if="isButtonShow">
                <text>保存</text>
            </div>

            <!-- 内容显示列表 -->
            <list class="list" v-bind:style="{ height: listH + 'px' , width: listW + 'px' }" v-if="isListShow">
                <cell class="cell" v-for="item in lists">
                    <text>{{ item }}</text>
                </cell>
            </list>

            <!-- 新建按钮 -->
            <div class="y-button" @click="checkList" v-if="isNewButtonShow">
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
                containerH: WXEnvironment.deviceHeight, //  设置容器的高度为设备高度，宽度默认为设备宽度
                lists: [],          //  设置 lists 数组
                listH: 4 * 85,      //  lists 高度
                listW: WXEnvironment.deviceWidth,   //  宽度
                textareaW: WXEnvironment.deviceWidth,   //
                isNewButtonShow: true,
                isListShow: false,
                isInputShow: false,
                isTextareaShow: false,
            }
        },
        methods: {
            checkList (){
//                this.isListShow = true ;
                this.isTextareaShow = true ;
//                this.lists.push(this.lists.length ++ ) ;
            },
            save (){
                modal.toast({
                    message : '保存成功',
                })
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
    /* -- 输入 -- */
    .wrapper {
        /*方便调试*/
        /*top: 120px;*/
        /*background-color: silver;*/
    }
    .container {
        background-color: #afddff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    /* -- 输入 -- */
    .textarea {
        top: 10px;
        left: 0px;
        font-size: 50px;
        border-width: 2px;
        border-style: solid;
        border-color: #41B883;
    }
    /* -- 保存按钮 -- */
    .y-button--save {
        width: 100px;
        height: 100px;

    }

    /* -- 列表 -- */
    .list {
        /*background-color: silver;*/
        top: 120px;;
        position: relative;
    }

    /* -- 行 -- */
    .cell {
        border-bottom-color: #c0c0c0;
        justify-content: center;
        border-style:none none solid none;
        border-bottom-width: 1px;
        height: 84px;
        /*padding: 20px;*/
    }

    /* -- 按钮 -- */
    .y-button {
        /*top: 400px;*/
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