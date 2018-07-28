import articleDetail from '@/components/layout/Detail.vue'
/**
 * 工厂函数 可以动态创建视图
 * @param type
 * @param data dispatch
 * @param title 占位符
 * @returns {*}
 */
export function createListView(type, data) {
    return {
        name: type,
        // this will be called during SSR to pre-fetch data into the store!
        preFetch(store) {
            return store.dispatch(data)
        },
        render(h) {
            return h(articleDetail, {
                props: {
                    type
                }
            })
        }
    }
}