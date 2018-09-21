import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import lmCount from '@/components/vuex_modules'

Vue.use(Vuex)

const state = {
  countA: 0
}
const modules = {
  lmCount,
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
export default store
