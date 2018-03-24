import axios from 'axios'
export const actions = {
    showIndexArticle({ commit, state }) {
        commit('ARTICLELOADING', false)
        axios.get('https://api.zmis.me/v1/home?page=' + state.columnId[state.nowColumn].page).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                commit('ARTICLELOADING', true)
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
        commit('ARTICLELOADING', false)
        axios.get('https://api.zmis.me/v1/tag/' + state.columnId[state.nowColumn].id + '?page=' + state.columnId[state.nowColumn].page).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                commit('ARTICLELOADING', true)
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
        commit('ARTICLELOADING', false)
        axios.get('https://api.zmis.me/v1/category/' + state.columnId[state.nowColumn].id + '?page=' + state.columnId[state.nowColumn].page).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                commit('ARTICLELOADING', true)
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
        axios.get('https://api.zmis.me/v1/home/' + state.columnId[state.nowColumn].id).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                commit('ARTICLEOBJECT', res.data.data)
            }
        })
    },
    showSearchArticle({ commit, state }) {
        commit('ARTICLELOADING', false)
        axios.get('https://api.zmis.me/v1/search?keyword=' + state.searchWord + '&page=' + state.columnId[state.nowColumn].page).then(res => {
            if (res.data.code === 200 && res.data.data !== "") {
                commit('ARTICLELOADING', true)
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            }
        })
    },
    showUserInfo({ commit, state }) {}
}