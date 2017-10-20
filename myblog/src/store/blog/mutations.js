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
    COLUMNID(state, columnId) {
        state.columnId[state.nowColumn] = columnId
    },
    NOWCOLUMN(state, nowColumn) {
        state.nowColumn = nowColumn
    },
    ARTICLEOBJECT(state, articleObject) {
        state.articleObject = articleObject
    }
}