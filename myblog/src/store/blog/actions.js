export const actions = {
    showIndexArticle({ commit, state }) {
        axios.get('http://127.0.0.1:8081/v1/home?page=' + state.columnId[state.nowColumn]).then(res => {
            commit('ARTICLELISTS', res.data.data)
        })
    },
    showArticle({ commit, state }) {
        axios.get('http://127.0.0.1:8081/v1/home/' + state.columnId[state.nowColumn]).then(res => {
            commit('ARTICLEOBJECT', res.data.data)
        })
    }
}