// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import axios from 'axios'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' // This line here
import 'animate.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.inc(0.2)
NProgress.configure({
    easing: 'ease',
    speed: 500,
    showSpinner: true
})
Vue.config.productionTip = false
Vue.use(VueMaterial)
window.axios = axios
router.beforeEach((to, from, next) => {
    let temQuery = {}
    for (let i in to.query) {
        if (i != "") {
            temQuery[i] = to.query[i]
        }
    }
    if (to.name === 'search' && to.query.keyword !== undefined && to.query.keyword !== '') {
        store.commit("SHOWSEARCHFRAME", true)
        store.commit("SEARCHWORD", to.query.keyword)
    } else {
        store.commit("SHOWSEARCHFRAME", false)
    }
    if (to.params.id !== undefined && to.name === 'category') {
        store.commit("NOWCATEGORY", to.params.id)
    } else if (to.name == 'home') {
        store.commit("NOWCATEGORY", 0)
    }
    store.commit("NOWCOLUMN", to.name)
    store.commit("PARAMSSTRING", to.params)
    store.commit("QUERYSTRING", temQuery)
    store.commit("URI", to.path)
    NProgress.start()
    next()
})

router.afterEach((to, from) => {
    if (to.name == 'tag') {
        store.dispatch("showTagArticle")
    } else if (to.name == 'category') {
        store.dispatch("showCategoryArticle")
    } else if (to.name == 'home') {
        store.dispatch("showIndexArticle")
    } else if (to.name == 'search' && to.query.keyword != "") {
        store.dispatch("showSearchArticle")
    } else if (to.name == 'article') {

    } else if (to.name == 'crh') {

    } else {
        router.push('/notFound')
    }
    NProgress.done()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})