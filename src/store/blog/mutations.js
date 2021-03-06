const marked = require("marked");
export const mutations = {
    TITLE(state, title) {
        state.title = title
    },
    DESCRIPTION(state, description) {
        state.description = description
    },
    ARTICLEPAGEINDEX(state, articlePageIndex) {
        state.articlePageIndex = articlePageIndex
    },
    ARTICLELISTS(state, articleLists) {
        state.articleLists = articleLists
    },
    NOWCOLUMN(state, nowColumn) {
        state.nowColumn = nowColumn
    },
    ARTICLEOBJECT(state, articleObject) {
        articleObject.contents = marked(articleObject.contents)
        state.articleObject = articleObject
    },
    SHOWNEXTPAGE(state, show) {
        state.showNextPage = show
    },
    PAGESIZE(state, pageSize) {
        state.pageSize = pageSize
    },
    NOWCATEGORY(state, nowCategory) {
        state.nowCategory = nowCategory
    },
    CATEGORYLISTS(state, categoryLists) {
        state.categoryLists = categoryLists
    },
    SHOWSEARCHFRAME(state, status) {
        state.showSearchFrame = status
    },
    SEARCHWORD(state, keyword) {
        state.searchWord = keyword
    },
    ARTICLELOADING(state, loading) {
        state.articleLoading = loading
    },
    QUERYSTRING(state, query) {
        state.queryString = query
    },
    PARAMSSTRING(state, params) {
        state.paramsString = params
    },
    URI(state, uri) {
        state.uri = uri
    },
    USER(state, key, value) {
        state.key = value
    },
    USERMENU(state, bools) {
        state.userMenu = !bools
    },
    CODESTATUS(state, codeStatus) {
        state.codeStatus = codeStatus
    },
    CUSTOMSTYLE(state, style) {
        state.customStyle = style
    },
    GITHUBREPOSITORY(state, githubRepository) {
        state.githubRepository = githubRepository
    },
    REQUESTURI(state, requestURI) {
        state.requestURI = requestURI
    },
    REQUESTPARAMS(state, requestParams) {
        state.requestParams = requestParams
    },
    COMMENTLOADING(state, isLoading) {
        state.commentLoading = isLoading
    },
    COMMENTNOWPAGE(state, nowPage) {
        state.commentNowPage = nowPage
    },
    COMMENTLISTS(state, lists) {
        state.commentLists = lists
    },
    COMMENTPARAMS(state, obj) {
        state.commentParams = obj
    },
    COMMENTRES(state, obj) {
        state.commentRes = obj
    },
    LINKLISTS(state, lists) {
        state.linkLists = lists
    },
    DEFAULTLINKLISTS(state, list) {
        state.defaultLinkLists = list
    },
    SHOWCOMMENTLIST(state, show) {
        state.showCommentList = show
    },
    CRHREQUEST(state, request) {
        state.crhRequest = request
    },
    CRHSETTYPE(state, type) {
        state.crhSetType = type
    },
    CRHTRAINLISTS(state, list) {
        state.crhTrainLists = list
    },
    CRHONETRAINDETAIL(state, detail) {
        state.crhOneTrainDetail = detail
    },
    CRHMAP(state, map) {
        state.crhMap = map
    },
    //staticHost
    STATICHOST(state, host) {
        state.staticHost = host
    }
}