import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = () =>
    import ('@/components/layout/Home.vue')
const Detail = () =>
    import ('@/components/layout/Detail.vue')
const Author = () =>
    import ('@/components/layout/Author.vue')
const NotFound = () =>
    import ('@/components/layout/NotFound.vue')

const createListView = (name, actionName) => () =>
    System.import('@/views/home').then(m => m.createListView(name, actionName))

const createArticleView = name => () =>
    System.import('@/views/articleDetail').then(m => m.createListView(name))

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [{
            path: '/notFound',
            name: 'notFound',
            component: createListView('NotFound')
        },
        {
            path: '/index',
            name: 'home',
            component: createListView('home', "showIndexArticle")
        },
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: `/article/:id`,
            name: 'article',
            component: createArticleView('articleDetail')
        },
        {
            path: '/single',
            name: 'single',
            component: Detail
        },
        {
            path: `/tag/:id`,
            name: 'tag',
            component: createListView('tag', "showTagArticle")
        },
        {
            path: `/category/:id`,
            name: 'category',
            component: createListView('category', "showCategoryArticle")
        },
        {
            path: `/search`,
            name: 'search',
            component: createListView('search', "showSearchArticle")
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