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
    const modal = weex.requireModule('modal')
    const LOADMORE_COUNT = 1
    export default {
        components: {
            AppHeader
        },
        data () {
            return {
                rows:[1,2,3,4,5,6,7,8,9,10,11]
            }
        },
        methods: {
           loadmore (event) {
                modal.toast({ message: 'loadmore', duration: 1 })

                setTimeout(() => {
                    const length = this.rows.length
                    for (let i = length; i < length + LOADMORE_COUNT; ++i) {
                        this.rows.push(i + 1)
                    }
                }, 800)
            }
        }
    }
</script>

<style scoped src='../style/index.css'>

</style>