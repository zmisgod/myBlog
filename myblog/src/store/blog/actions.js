export const actions = {
    showIndexArticle({ commit, state }) {
        console.log()
        axios.get(process.env.API_HOST + '/v1/home?page=' + state.columnId[state.nowColumn]).then(res => {   
        if (res.data.code === 200) {
                commit('ARTICLELISTS', res.data.data)
            }
        })
    },
    showArticle({ commit, state }) {
        axios.get(process.env.API_HOST + '/v1/home/' + state.columnId[state.nowColumn]).then(res => {
            if (res.data.code === 200) {
                commit('ARTICLEOBJECT', res.data.data)
            }
        })
    }
}