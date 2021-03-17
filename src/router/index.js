import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home.vue')
const category = () => import('../views/category/category.vue')
const shopcart = () => import('../views/shopcart/shopcart.vue')
const me = () => import('../views/profile/profile.vue')
const detail = () => import('../views/detail/detail')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "home"
    },
    {
        path: '/home',
        component: home
    }, {
        path: '/category',
        component: category
    },
    {
        path: '/shopcart',
        component: shopcart
    },
    {
        path: '/me',
        component: me
    },
    {
        path: '/detail/:id',
        component: detail
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
