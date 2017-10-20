import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state = {
    title: 'starzmisgod',
    description: '',
    articleObject: {}, //文章的对象
    articleLists: [], //文章列表
    leftBar: 0, //左边的菜单栏是否开启 0 关闭 1 开启
    nowColumn: 'home', //home， article，category，tag, comment
    columnId: {
        home: 1,
        article: 0,
        category: 0,
        tag: 0,
        comment: 1
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}