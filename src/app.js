// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import VueMaterial from 'vue-material'

// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default-dark.css' // This line here
Vue.use(VueMaterial)

import axios from 'axios'

Vue.use(axios)
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

// NProgress.inc(0.2)
// NProgress.configure({ easing: 'ease', speed: 500, showSpinner: true })
// Vue.config.productionTip = false
// window.axios = axios
// Vue.material.registerTheme('white', {
//     primary: 'white',
//     accent: 'white',
//     warn: 'white',
//     background: 'white'
// })

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
    // create store and router instances
    const store = createStore()
    const router = createRouter()
  
    // sync the router with the vuex store.
    // this registers `store.state.route`
    sync(store, router)
  
    // create the app instance.
    // here we inject the router, store and ssr context to all child components,
    // making them available everywhere as `this.$router` and `this.$store`.
    const app = new Vue({
      router,
      store,
      render: h => h(App)
    })
  
    // expose the app, the router and the store.
    // note we are not mounting the app here, since bootstrapping will be
    // different depending on whether we are in a browser or on the server.
    return { app, router, store }
}