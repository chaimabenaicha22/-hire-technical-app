import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  pages: []
})

export const mutations = {
  ADD_PAGE(state, page) {
    state.pages.push(page)
  }
}

export const actions = {
  addPage({ commit }, page) {
    commit('ADD_PAGE', page)
  }
}
