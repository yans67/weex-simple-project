<template>
    <div class="wrapper">
        <text class="navBtn" @click="jump('/home')">新建</text>
    </div>
</template>

<style scoped>
    .wrapper {
        flex-direction: row;
        position: relative;
        height: 120px;
        margin-bottom: 3px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #DDDDDD;
        background-color: #444E69;
    }
    .navBtn {
        position: absolute;
        
        right: 20px;
        width: 100px;
        background-color: red;
    }
</style>
