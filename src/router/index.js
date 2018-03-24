import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = () => import('../components/home/Index.vue')
const ArticleDetail = () => import('../components/single/Detail.vue')
const ArticleSingle = () => import('../components/single/Single.vue')
const AuthorInfo = () => import('../components/author/Info.vue')

export function createRouter () {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return { x: 0, y: 0 }
            }
        },
        routes: [
            {
                path: '/',
                name: 'home',
                component: Index
            },
            {
                path: `/detail_:id`,
                name: 'article',
                component: ArticleDetail
            },
            {
                path: '/single',
                name: 'single',
                component: ArticleSingle
            },
            {
                path: `/tag_:id`,
                name: 'tag',
                component: Index
            },
            {
                path: `/category_:id`,
                name: 'category',
                component: Index
            },
            {
                path: `/search`,
                name: 'search',
                component: Index
            },
            {
                path: `/chat`,
                name: 'chat',
                component: Index
            },
            {
                path: `/author/:author_name`,
                name: 'author_info',
                component: AuthorInfo
            },
        ]
    })
}