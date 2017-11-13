import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state = {
    title: 'starzmisgod',
    description: '',
    nowCategory: 'all',
    categoryLists: {
        'all': {
            cn: '全部文章',
            id: 0
        },
        'three': {
            cn: '技术分享',
            id: 3
        },
        'one': {
            cn: '不可描述',
            id: 1
        },
        'two': {
            cn: '心情感悟',
            id: 2
        },
    },
    pageSize: 12,
    showNextPage: false, // 是否显示下一页
    articleObject: {}, //文章的对象
    articleLists: [], //文章列表
    leftBar: 0, //左边的菜单栏是否开启 0 关闭 1 开启
    nowColumn: 'home', //home， article，category，tag, comment
    columnId: {
        home: {
            page: 1
        },
        article: {
            id: 0
        },
        category: {
            page: 1,
            id: 0
        },
        tag: {
            page: 1,
            id: 0
        },
        comment: {
            page: 1,
            id: 0
        }
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}