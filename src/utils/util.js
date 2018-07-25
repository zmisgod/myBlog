const util = {
    saveState(route, store) {
        let to = route
        console.log(to)
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
}
export default util