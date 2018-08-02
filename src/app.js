// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import {
    sync
} from 'vuex-router-sync'
import VueMaterial from "vue-material"
import metaMixin from './utils/meta'
Vue.mixin(metaMixin)
Vue.use(VueMaterial)
// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

/**
 * 创建vue实例
 * 在这里注入 router  store 到所有的子组件
 * 这样就可以在任何地方使用 `this.$router` and `this.$store`
 * @type {Vue$2}
 */
const app = new Vue({
    router,
    store,
    render: h => h(App)
})

/**
 * 导出 router and store.
 * 在这里不需要挂载到app上。这里和浏览器渲染不一样
 */
export {
    app,
    router,
    store
}