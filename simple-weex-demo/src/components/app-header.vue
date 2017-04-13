<template>
    <div class="nav">
        <text class="leftBtn" @click="jump('/index')">首页</text>
        <text class="rightBtn" @click="jump('/edit')">新建</text>
    </div>
</template>

<style scoped>
    .nav {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 120px;
        width: auto;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #DDDDDD;
        background-color: #444E69;
    }
    .leftBtn {
        left: 20px;
        background-color: green;
    }
    .rightBtn {
        right: 20px;
        background-color: green;
    }
</style>