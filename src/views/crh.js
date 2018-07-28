import crh from '@/components/layout/Crh.vue'
/**
 * 工厂函数 可以动态创建视图
 * @param type
 * @returns {*}
 */
export function createCRHView(type, data) {
    return {
        name: type,
        // this will be called during SSR to pre-fetch data into the store!
        preFetch(store) {
            return store.dispatch(data)
        },
        render(h) {
            return h(crh, {
                props: {
                    type
                }
            })
        }
    }
}