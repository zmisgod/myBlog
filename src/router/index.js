import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import ('@/components/layout/Home.vue')
const Detail = () =>
    import ('@/components/layout/Detail.vue')
const Author = () =>
    import ('@/components/layout/Author.vue')
const NotFound = () =>
    import ('@/components/layout/NotFound.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [{
            path: '/notFound',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: `/article/:id`,
            name: 'article',
            component: Detail
        },
        {
            path: '/single',
            name: 'single',
            component: Detail
        },
        {
            path: `/tag/:id`,
            name: 'tag',
            component: Home
        },
        {
            path: `/category/:id`,
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