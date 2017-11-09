import Vue from 'vue'
import Vuex from 'vuex'
import blog from './blog'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        blog
    }
})