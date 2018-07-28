import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = () =>
    import ('@/components/layout/Home.vue')
const Detail = () =>
    import ('@/components/layout/Detail.vue')
const Author = () =>
    import ('@/components/layout/Author.vue')

const createListView = (name, actionName, title) => () =>
    System.import('@/views/home').then(m => m.createListView(name, actionName, title))

const createArticleView = (name, actionName) => () =>
    System.import('@/views/articleDetail').then(m => m.createListView(name, actionName))

const createCRHView = (name, actionName) => () =>
    System.import('@/views/crh').then(m => m.createCRHView(name, actionName))

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [{
            path: '/',
            name: 'home',
            component: createListView('home', "showIndexArticle", "全部文章")
        },
        {
            path: `/article/:id`,
            name: 'article',
            component: createArticleView('articleDetail', "showArticle")
        },
        {
            path: `/tag/:id`,
            name: 'tag',
            component: createListView('tag', "showTagArticle", "标签文章")
        },
        {
            path: `/category/:id`,
            name: 'category',
            component: createListView('category', "showCategoryArticle", "分类文章")
        },
        {
            path: `/search`,
            name: 'search',
            component: createListView('search', "showSearchArticle", "搜索文章")
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
        {
            path: '/single',
            name: 'single',
            component: Detail
        },
        {
            path: '/notFound',
            name: 'notFound',
            component: createListView('NotFound')
        },
        {
            path: '/crh',
            name: 'crh',
            component: createCRHView('crh', 'showCRHInfo')
        }
    ]
})