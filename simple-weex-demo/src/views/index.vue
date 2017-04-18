<template>
    <div class="wrapper">

        <div class="container" v-bind:style="{ height:containerH + 'px' }">

            <!-- 初始化新建按钮 -->
            <div class="y-button" v-if="isNewButtonShow" @click="checkList" @appear="onappear" @disappear="ondisappear">
                <text>New</text>
            </div>

            <!-- 输入框 -->
            <textarea v-if="isTextareaShow" v-bind:style="{ width:textareaW + 'px' }"
                      class="textarea" type="text" autofocus="true" rows="10" v-model="textValue"></textarea>

            <!-- 保存按钮 -->
            <div class="y-button-save" @click="save" v-if="isRightButtonShow">
                <text style="font-size: 29px">{{ btnValue }}</text>
            </div>

            <!-- 内容显示列表 -->
            <list class="list" v-bind:style="{ height: listH + 'px' , width: listW + 'px' }" v-if="isListShow">
                <cell class="cell" v-for="item in lists">
                    <text class="cell-row" @click="cellClick">{{ item }}</text>
                </cell>
            </list>

        </div>
    </div>
</template>

<script>
    const LOADMORE_COUNT = 1;
    const STORAGE_KEY = 'todoList' ;
    import Store from '../store.js' ;
    const modal = weex.requireModule('modal') ;
    const storage = weex.requireModule('storage') ;

    export default {
        components: {
        },
        data () {
            return {
                containerH: WXEnvironment.deviceHeight, //  设置容器的高度为设备高度，宽度默认为设备宽度
                lists: [],          //  设置 lists 数组
                listH: 85,          //  lists 高度
                listW: WXEnvironment.deviceWidth,
                textareaW: WXEnvironment.deviceWidth,

                isNewButtonShow: true,
                isListShow: false,
                isInputShow: false,
                isTextareaShow: false,
                isRightButtonShow: false,

                textValue: '',
                btnValue: '新建',
            }
        },

        methods: {
            onappear (event){
                modal.toast({
                    message : "onappear  " + event,
                    duration :0.3,
                });
                console.log(onappear) ;
            },
            ondisappear (event){
                modal.toast({
                    message : "ondisappear  " + event,
                    duration :0.3,
                });
                console.log(ondisappear) ;
            },
            cellClick (event){
               console.log(event.target.innerText)
            },
            checkList (){
                this.isTextareaShow = true ;
                this.isNewButtonShow = false ;
                this.isRightButtonShow = true ;
                this.btnValue = '保存';
            },
            save (){
                // 新建按钮的事件
                if (this.btnValue == '新建'){
                    this.isTextareaShow = true ;
                    this.isListShow = false ;
                }else{
                    // 判断输入是否为空
                    if(this.textValue == ''){
                        modal.toast({
                            message : '输入数据为空，请重新输入',
                            duration :0.3,
                        })
                        return ;
                    }
                    // 记录数据，去除前后空格和换行
                    this.textValue = this.textValue.replace(/<\/?.+?>/g,"");
                    this.textValue = this.textValue.replace(/[\r\n]/g, "");
                    this.lists.push(this.textValue.trim());
                    // 显示列表
                    this.isTextareaShow = false ;
                    this.isListShow = true ;

                    this.listH += 70 ;
                }

                // 修改按钮
                (this.btnValue == '保存') ? this.btnValue = '新建':this.btnValue = '保存';
                this.textValue = '' ;
            }
        },

//        mounted (){
//            this.lists = Store.fetch(STORAGE_KEY) ;
//            if(this.lists.length == 0){ // 如果 lists 没有数据则显示 list 列表
//                this.isNewButtonShow = true ;
//            }else{  // 如果 lists 没有数据则只显示新建按钮
//                this.isListShow = true ;
//                this.isRightButtonShow = true ;
//                this.listH = this.lists.length * 90 ;
//            }
//        },
        watch: {
            // 监听 lists 长度的变化
            lists: {
                handler: function(){
                    Store.save(this.lists) ;
                }
            }
        }
    }
</script>

<style scoped>
    /* -- 输入 -- */
    .wrapper {
        /*方便调试*/
        top: 120px;
        /*background-color: silver;*/
    }
    .container {
        /*background-color: #afddff;*/
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/ /* 副轴居中对齐 */
        align-items: center;           /* 主轴居中对齐 */
    }

    /* -- 输入 -- */
    .textarea {
        top: 120px;
        left: 0px;
        font-size: 50px;
        padding-left: 18px;
        /*border-width: 2px;*/
        /*border-style: solid;*/
        /*border-color: #41B883;*/
    }
    /* -- 保存按钮 -- */
    .y-button-save {
        top: 30px;
        right: 10px;
        position: absolute;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        background-color: #20a0ff;
        width: 100px;
        height: 60px;
        border-radius: 10px;
    }
    .y-button-save:focus, .y-button-save:hover {
        background-color: #20a0ff;
        border-color: #20a0ff;
        color: #fff
    }
    .y-button-save.is-active, .y-button-save:active{
        background-color: #1d90e6;
        border-color: #1d90e6;
        color: #fff
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
    .cell-row {
        height: 70px;
        margin-top: 0px;
        margin-bottom: 0px;
        padding-top: 17px;
        padding-left: 17px;
    }
</style>