import Vue from 'vue'
import Router from 'vue-router'
import Students from './components/Students.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    base: __dirname,
    routes: [{
            path: '/',
            name: 'students',
            component: Students
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})