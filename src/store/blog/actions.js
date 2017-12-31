var NSprogress = require("nprogress")
export const actions = {
    showIndexArticle({ commit, state }) {
        NSprogress.start()
        commit('ARTICLELOADING', false)
        axios.get(process.env.API_HOST + '/v1/home?page=' + state.columnId[state.nowColumn].page).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                commit('ARTICLELOADING', true)
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
                NSprogress.done(true)
            }
        })
    },
    showTagArticle({ commit, state }) {
        NSprogress.start()
        commit('ARTICLELOADING', false)
        axios.get(process.env.API_HOST + '/v1/tag/' + state.columnId[state.nowColumn].id + '?page=' + state.columnId[state.nowColumn].page).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                commit('ARTICLELOADING', true)
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
                NSprogress.done(true)
            }
        })
    },
    showCategoryArticle({ commit, state }) {
        NSprogress.start()
        commit('ARTICLELOADING', false)
        axios.get(process.env.API_HOST + '/v1/category/' + state.columnId[state.nowColumn].id + '?page=' + state.columnId[state.nowColumn].page).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                commit('ARTICLELOADING', true)
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
                NSprogress.done(true)
            }
        })
    },
    showArticle({ commit, state }) {
        NSprogress.start()
        axios.get(process.env.API_HOST + '/v1/home/' + state.columnId[state.nowColumn].id).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                commit('ARTICLEOBJECT', res.data.data)
                NSprogress.done(true)
            }
        })
    },
    showSearchArticle({ commit, state }) {
        NSprogress.start()
        commit('ARTICLELOADING', false)
        axios.get(process.env.API_HOST + '/v1/search?keyword=' + state.searchWord + '&page=' + state.columnId[state.nowColumn].page).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                commit('ARTICLELOADING', true)
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
                NSprogress.done(true)
            }
        })
    }
}