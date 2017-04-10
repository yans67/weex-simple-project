/**
 * Created by huangyg on 2017/4/9.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './components/Home.vue'
import Index from './components/Index.vue'

// Story view factory
// function createStoriesView (type) {
//     return {
//         name: `${type}-stories-view`,
//         render (createElement) {
//             return createElement(StoriesView, { props: { type }})
//         }
//     }
// }

//
// export default new Router({
//     routes:[
//         { path: '/index', component: createStoriesView('index') },
//         { path: '/home', component: createStoriesView('home') },
//     ]
// })


export default new Router({
    // routes: routes
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
})