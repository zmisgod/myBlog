import 'es6-promise/auto'
import {
    app,
    store,
    router
} from './app'

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

function saveState(to) {
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
}

function getDispatchName(to, router) {
    if (to.name == 'tag') {
        return "showTagArticle"
    } else if (to.name == 'category') {
        return "showCategoryArticle"
    } else if (to.name == 'home') {
        return "showIndexArticle"
    } else if (to.name == 'search' && to.query.keyword != "") {
        return "showSearchArticle"
    } else if (to.name == 'article') {
        return "showArticle"
    } else if (to.name == 'crh') {
        return "showCRHInfo"
    } else {
        return '404'
    }
}

function getListTitle(to, store) {}
/**
 * 异步组件
 */
router.onReady(() => {
    router.beforeResolve((to, from, next) => {
        saveState(to)
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)
        let diffed = false
        const activated = matched.filter((c, i) => {
            if (c.name == "category" || c.name == "tag" || c.name == "home") {
                return true
            } else {
                return diffed || (diffed = (prevMatched[i] !== c))
            }
        })
        const matchedComponents = activated.map(c => c.preFetch).filter(_ => _)
        if (!matchedComponents.length) {
            return next()
        }
        let dispatchName = getDispatchName(to, router)
        // bar.start()
        Promise.all(matchedComponents.map(component => {
                return component(store, dispatchName)
            }))
            .then(() => {
                // bar.finish()
                next()
            })
            .catch(next)
    })
    // 开始挂载到dom上
    app.$mount('#app')
})

// service worker
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
}