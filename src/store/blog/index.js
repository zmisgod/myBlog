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
    categoryLists: [{
            cn: '全部文章',
            location: '/',
            type: ''
        },
        {
            cn: '技术分享',
            location: '/category/3',
            type: ''
        },
        {
            cn: '不可描述',
            location: '/category/1',
            type: ''
        },
        {
            cn: '心情感悟',
            location: '/category/2',
            type: ''
        },
        {
            cn: 'CRH',
            location: '/crh',
            type: ''
        },
        {
            cn: 'Github',
            location: 'https://github.com/zmisgod',
            type: 'blank'
        }
    ],
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
    },
    requestURI: '/', //请求地址
    requestParams: {}, //请求参数
}

export default {
    state,
    getters,
    actions,
    mutations
}