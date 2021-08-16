import Vue from 'vue'
import Vuex from 'vuex'
import moddle from './modules/moddle'
// import user from './modules/user'
import getters from './getter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moddle,
  },
  getters,
})
