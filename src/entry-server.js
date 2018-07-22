import {
    app,
    router,
    store
} from './app'

const isDev = process.env.NODE_ENV !== 'production'

function saveState(store) {
    let to = store.state.route
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
// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default context => {
    const s = isDev && Date.now()

    return new Promise((resolve, reject) => {
        // set router's location
        router.push(context.url)
        // wait until router has resolved possible async hooks
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            // no matched routes
            if (!matchedComponents.length) {
                reject({
                    code: 404
                })
            }
            saveState(store)
            // Call preFetch hooks on components matched by the route.
            // A preFetch hook dispatches a store action and returns a Promise,
            // which is resolved when the action is complete and store state has been
            // updated.
            Promise.all(matchedComponents.map(component => {
                return component.preFetch && component.preFetch(store, store.state.route)
            })).then(() => {
                isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
                // After all preFetch hooks are resolved, our store is now
                // filled with the state needed to render the app.
                // Expose the state on the render context, and let the request handler
                // inline the state in the HTML response. This allows the client-side
                // store to pick-up the server-side state without having to duplicate
                // the initial data fetching on the client.
                context.state = store.state
                resolve(app)
            }).catch((reject) => {

            })
        })
    }).catch(err => {
        console.log("entry-server.js")
        console.log(err)
    })
}