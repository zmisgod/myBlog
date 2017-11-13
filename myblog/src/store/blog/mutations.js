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
    LEFTBAR(state, leftBar) {
        state.leftBar = leftBar
    },
    COLUMNID(state, dataObj) {
        state.columnId[state.nowColumn][dataObj.key] = dataObj.value
    },
    NOWCOLUMN(state, nowColumn) {
        state.nowColumn = nowColumn
    },
    ARTICLEOBJECT(state, articleObject) {
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
    }
}