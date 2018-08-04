import axios from 'axios'
const apiHost = process.env.NODE_ENV != 'production' ? "http://127.0.0.1:8081/v1/" : "https://api.zmis.me/v1/"

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
            console.log("home " + err)
        })
    },
    showTagArticle({
        commit,
        state
    }) {
        let query_string = ''
        for (let i in state.queryString) {
            query_string += i + '=' + state.queryString[i] + '&'
        }
        return axios.get(apiHost + 'tag/' + state.paramsString.id + '?' + query_string).then(res => {
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
        })
    },
    showCategoryArticle({
        commit,
        state
    }) {
        let query_string = ''
        for (let i in state.queryString) {
            query_string += i + '=' + state.queryString[i] + '&'
        }
        return axios.get(apiHost + 'category/' + state.paramsString.id + '?' + query_string).then(res => {
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
        })
    },
    showArticle({
        commit,
        state
    }) {
        let query_string = ''
        for (let i in state.queryString) {
            query_string += i + '=' + state.queryString[i] + '&'
        }
        //评论默认显示第一页
        commit("COMMENTNOWPAGE", 1)
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
        let query_string = ''
        for (let i in state.queryString) {
            query_string += i + '=' + state.queryString[i] + '&'
        }
        return axios.get(apiHost + 'search?' + query_string).then(res => {
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
        })
    },
    //显示评论
    showCommentLists({
        commit,
        state
    }) {
        axios.get(apiHost + 'comment/' + state.paramsString.id + '?page=' + state.commentNowPage).then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                if (res.data.data.length === state.pageSize) {
                    commit("COMMENTNOWPAGE", ++state.commentNowPage)
                }
                commit('COMMENTLISTS', res.data.data)
            } else {
                commit('CODESTATUS', res.data.code)
            }
        })
    },
    //评论
    doComment({
        commit,
        state
    }) {
        axios.post(apiHost + 'comment/' + state.paramsString.id, state.commentParams).then(res => {
            commit('COMMENTRES', res.data)
            commit("COMMENTPARAMS", {})
        })
    },
    showLinkLists({
        commit,
        state
    }) {
        axios.get(apiHost + 'link').then(res => {
            if (res.data.code === 200 && res.data.data !== "" && res.data.data !== null) {
                commit('LINKLISTS', res.data.data)
            } else {
                commit('LINKLISTS', state.defaultLinkLists)
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
            console.log("getTest" + err)
        })
    },
    showCRHInfo({
        commit,
        state
    }) {

    }
}