// import Vue from 'vue'
import App from './App.vue'
import router from './router'

// new Vue({
//     el: "#root",
//     router,
//     template: '<App/>',
//     components: { App }
// })

new Vue(Vue.util.extend({ el: '#root', router }, App))

router.push('/')