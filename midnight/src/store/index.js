import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNight: true,
    showAbout: null,
    showContact: null
  },
  mutations: {
    changeNight(state) {
      state.isNight = !state.isNight
      console.log(state.isNight)
    },

    change(state, payload) {

      if (payload == 'about') {
        console.log(state.showAbout)
        state.showAbout = true
      } else if (payload == 'contacts') {
        console.log(state.showContact)
      }

    }
  },
  actions: {
  },
  modules: {
  }
})
