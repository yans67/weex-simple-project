// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mixin from './mixins'
// new Vue({
//     el: "#root",
//     router,
//     template: '<App/>',
//     components: { App }
// })
Vue.mixin(mixin)

new Vue(Vue.util.extend({ el: '#root', router }, App))

router.push('/')