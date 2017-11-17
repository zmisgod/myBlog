export const actions = {
    showIndexArticle({ commit, state }) {
        axios.get(process.env.API_HOST + '/v1/home?page=' + state.columnId[state.nowColumn].page).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            }
        })
    },
    showTagArticle({ commit, state }) {
        axios.get(process.env.API_HOST + '/v1/tag/' + state.columnId[state.nowColumn].id + '?page=' + state.columnId[state.nowColumn].page).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            }
        })
    },
    showCategoryArticle({ commit, state }) {
        axios.get(process.env.API_HOST + '/v1/category/' + state.columnId[state.nowColumn].id + '?page=' + state.columnId[state.nowColumn].page).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            }
        })
    },
    showArticle({ commit, state }) {
        axios.get(process.env.API_HOST + '/v1/home/' + state.columnId[state.nowColumn].id).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                commit('ARTICLEOBJECT', res.data.data)
            }
        })
    },
    showSearchArticle({ commit, state }) {
        axios.get(process.env.API_HOST + '/v1/search?keyword=' + state.searchWord + '&page=' + state.columnId[state.nowColumn].page).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            }
        })
    }
}