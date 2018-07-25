import axios from 'axios'
const apiHost = "http://127.0.0.1:8081/v1/"

function getParams(params) {
    let res = ''
    let i = 0
    if (params.length != 0) {
        params.map(function(k, v) {
            if (k != '' && v != 'undefined') {
                let combine = '&'
                if (i == 0) {
                    combine = '?'
                }
                res += combine + k + '=' + v
            }
        })
    }
    return res
}
export const actions = {
    showIndexArticle({
        commit,
        state
    }) {
        let query_string = ''
        for (let i in state.queryString) {
            query_string += i + '=' + state.queryString[i] + '&'
        }
        return axios.get(apiHost + 'home?' + query_string).then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            } else {
                commit('CODESTATUS', res.data.code)
            }
        }).catch(err => {
            console.log(err)
        })
    },
    showTagArticle({
        commit,
        state
    }) {
        commit('ARTICLELOADING', false)
        let query_string = ''
        for (let i in state.queryString) {
            query_string += i + '=' + state.queryString[i] + '&'
        }
        return axios.get(apiHost + 'tag/' + state.paramsString.id + '?' + query_string).then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                commit('ARTICLELOADING', true)
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            } else {
                commit('CODESTATUS', res.data.code)
            }
        })
    },
    showCategoryArticle({
        commit,
        state
    }) {
        commit('ARTICLELOADING', false)
        let query_string = ''
        for (let i in state.queryString) {
            query_string += i + '=' + state.queryString[i] + '&'
        }
        return axios.get(apiHost + 'category/' + state.paramsString.id + '?' + query_string).then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                commit('ARTICLELOADING', true)
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            } else {
                commit('CODESTATUS', res.data.code)
            }
        })
    },
    showArticle({
        commit,
        state
    }) {
        let query_string = ''
        for (let i in state.queryString) {
            query_string += i + '=' + queries[i] + '&'
        }
        return axios.get(apiHost + 'article/' + state.paramsString.id + '?' + query_string).then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                commit('ARTICLEOBJECT', res.data.data)
            } else {
                commit('CODESTATUS', res.data.code)
            }
        })
    },
    showSearchArticle({
        commit,
        state
    }) {
        commit('ARTICLELOADING', false)
        let query_string = ''
        for (let i in state.queryString) {
            query_string += i + '=' + state.queryString[i] + '&'
        }
        return axios.get(apiHost + 'search?' + query_string).then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                commit('ARTICLELOADING', true)
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            } else {
                commit('CODESTATUS', res.data.code)
            }
        })
    },
    showUserInfo({
        commit,
        state
    }) {},
    //ceshi
    getTest({
        commit,
        state
    }) {
        return axios.get(apiHost + state.requestURI + getParams(state.requestParams)).then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                if (res.data.data.length === state.pageSize) {
                    commit('SHOWNEXTPAGE', true)
                } else {
                    commit('SHOWNEXTPAGE', false)
                }
                commit('ARTICLELISTS', res.data.data)
            } else {
                commit('CODESTATUS', res.data.code)
            }
        }).catch(err => {
            console.log(err)
        })
    }
}