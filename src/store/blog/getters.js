export const getters = {
    title: state => state.title,
    description: state => state.description,
    articleLists: state => state.articleLists,
    leftBar: state => state.leftBar,
    columnId: state => state.columnId,
    nowColumn: state => state.nowColumn,
    articleObject: state => state.articleObject,
    showNextPage: state => state.showNextPage,
    pageSize: state => state.pageSize,
    nowCategory: state => state.nowCategory,
    categoryLists: state => state.categoryLists,
    showSearchFrame: state => state.showSearchFrame,
    searchWord: state => state.searchWord,
    channel: state => state.channel,
    articleLoading: state => state.articleLoading
}