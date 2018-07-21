import {
    getters
} from './getters'
import {
    actions
} from './actions'
import {
    mutations
} from './mutations'

const state = {
    customStyle: {
        'DARK_PRIMARY_COLOR': '#388e3c',
        'LIGHT_PRIMARY_COLOR': '#C8E6C9',
        'PRIMARY_COLOR': '#4CAF50',
        'COLOR': '#FFFFFF',
        'ACCENT_COLOR': '#FFC107',
        'PRIMARY_TEXT': '#212121',
        'SECONDARY_TEXT': '#757575',
        'DIVIDER_COLOR': '#BDBDBD'
    },
    title: 'starzmisgod',
    showSearchFrame: false,
    description: '',
    nowCategory: '0',
    codeStatus: 200,
    queryString: {},
    paramsString: {},
    uri: '',
    userMenu: false,
    commentLoading: false,
    commentNowPage: 1,
    commentLists: [],
    categoryLists: {
        '0': {
            cn: '全部文章',
            id: 0,
        },
        '3': {
            cn: '技术分享',
            id: 3
        },
        '1': {
            cn: '不可描述',
            id: 1
        },
        '2': {
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
    articleLoading: false,
    searchWord: '',
    github_repository: 'https://github.com/zmisgod/myBlog',
    user: {
        socialMedia: {
            github: "https://github.com/zmisgod",
            weibo: "https://weibo.com/zmisgod",
            email: "starzmisgod@gmail.com",
            phone: 15216743007
        },
        info: {
            name: 'zmisgod',
            avatar: '/static/logo.png',
            description: '生而为人，我很抱歉'
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}