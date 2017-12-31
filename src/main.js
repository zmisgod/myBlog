// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import axios from 'axios'
import 'vue-material/dist/vue-material.css'
import 'animate.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: true })
Vue.config.productionTip = false
Vue.use(VueMaterial)
window.axios = axios
Vue.material.registerTheme('white', {
    primary: 'white',
    accent: 'white',
    warn: 'white',
    background: 'white'
})
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})