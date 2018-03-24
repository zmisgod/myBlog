import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = () => import('@/components/layout/Home.vue')
const Detail = () => import('@/components/layout/Detail.vue')
const Author = () => import('@/components/layout/Author.vue')

export function createRouter () {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior(to, from, savedPosition) {
            return { y: 0 }
        },
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: `/detail_:id`,
                name: 'detail',
                component: Detail
            },
            {
                path: '/single',
                name: 'single',
                component: Detail
            },
            {
                path: `/tag_:id`,
                name: 'tag',
                component: Home
            },
            {
                path: `/category_:id`,
                name: 'category',
                component: Home
            },
            {
                path: `/search`,
                name: 'search',
                component: Home
            },
            {
                path: `/chat`,
                name: 'chat',
                component: Home
            },
            {
                path: `/author/:author_name`,
                name: 'author_info',
                component: Author
            },
        ]
    })
}