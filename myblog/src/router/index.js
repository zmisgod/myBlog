import Vue from 'vue'
import Router from 'vue-router'
import HomeLists from '@/components/home/Lists'
import ArticleInfo from '@/components/single/Info'
import ArticleSingle from '@/components/single/Single'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: HomeLists
        },
        {
            path: `/detail_:id`,
            name: 'article',
            component: ArticleInfo
        },
        {
            path: '/single',
            name: 'single',
            component: ArticleSingle
        }
    ]
})