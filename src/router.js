import Vue from 'vue'
import Router from 'vue-router'
import Students from './components/Students.vue'
import About from './components/About.vue'
import Add from './components/Add.vue'
import StudentsDetails from './components/StudentsDetails.vue'
import Edit from './components/Edit.vue'

import axios from 'axios'
// 将 axios 添加到 Vue.prototype 中
Vue.prototype.$axios = axios

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
        },
        {
            path: '/add',
            name: 'add',
            component: Add
        },
        {
            path: '/student/:id',
            name: 'studentsdetails',
            component: StudentsDetails
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: Edit
        }
    ]
})