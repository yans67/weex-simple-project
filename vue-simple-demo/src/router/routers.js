import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Company from '@/components/Company'

// 懒加载，当需要访问哪个组件时才会加载哪个组件。当组件较多时能提高首次加载速度
// const routes = [
//   // 重定向
//   {path: '/', redirect: '/index'},ç
//   {path: '/index', component: resolve => require(['@/components/Hello.vue'], resolve)},
//   {path: '/home', component: resolve => require(['@/components/Home.vue'], resolve)},
//   {path: '/company', component: resolve => require(['@/components/Company.vue'], resolve)}
// ]

export default new Router({
  // routes: routes
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    }
  ]
})
