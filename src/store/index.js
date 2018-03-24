import Vue from 'vue'
import Vuex from 'vuex'
import blog from './blog'
import axios from 'axios'
Vue.use(Vuex)
Vue.use(axios)

export function createStore () {
    return new Vuex.Store({
        modules: {
            blog
        }
    })
}