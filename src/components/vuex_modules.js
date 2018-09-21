import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
  countB: 1,
  widget: {name: 'lmm', age: 24}
}
const mutations = {
}
const actions = {
  addCount ({commit, state}) {
    state.countB++
  },
  updateWidget ({commit, state}) {
    state.widget.age = 23
  }
}
const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
