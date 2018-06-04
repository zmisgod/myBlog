export const actions = {
    showIndexArticle({ commit, state }) {
        commit('ARTICLELOADING', false)
        let query_string = ''
        for(let i in state.queryString) {
            query_string += i +'=' + state.queryString[i]+ '&'
        }
        axios.get(process.env.API_HOST + '/v1/home?'+ query_string).then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                commit('ARTICLELOADING', true)
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            }else{
                commit('CODESTATUS', res.data.code)
            }
        })
    },
    showTagArticle({ commit, state }) {
        commit('ARTICLELOADING', false)
        let query_string = ''
        for(let i in state.queryString) {
            query_string += i +'=' + state.queryString[i]+ '&'
        }
        axios.get(process.env.API_HOST + '/v1/tag/' + state.paramsString.id + '?'+query_string).then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                commit('ARTICLELOADING', true)
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            }else{
                commit('CODESTATUS', res.data.code)
            }
        })
    },
    showCategoryArticle({ commit, state }) {
        commit('ARTICLELOADING', false)
        let query_string = ''
        for(let i in state.queryString) {
            query_string += i +'=' + state.queryString[i]+ '&'
        }
        axios.get(process.env.API_HOST + '/v1/category/' + state.paramsString.id + '?'+query_string).then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                commit('ARTICLELOADING', true)
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            }else{
                commit('CODESTATUS', res.data.code)
            }
        })
    },
    showArticle({ commit, state }) {
        let query_string = ''
        for(let i in state.queryString) {
            query_string += i +'=' + queries[i]+ '&'
        }
        axios.get(process.env.API_HOST + '/v1/home/' + state.paramsString.id + '?'+query_string).then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                commit('ARTICLEOBJECT', res.data.data)
            }else{
                commit('CODESTATUS', res.data.code)
            }
        })
    },
    showSearchArticle({ commit, state }) {
        commit('ARTICLELOADING', false)
        let query_string = ''
        for(let i in state.queryString) {
            query_string += i +'=' + state.queryString[i]+ '&'
        }
        axios.get(process.env.API_HOST + '/v1/search?'+query_string).then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                commit('ARTICLELOADING', true)
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            }else{
                commit('CODESTATUS', res.data.code)
            }
        })
    },
    showUserInfo({ commit, state }) {}
}