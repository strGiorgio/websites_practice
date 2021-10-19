import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idAdmin: false,
    urlUserDataBase: 'http://localhost:3000/users'
  },
  mutations: {
    
  },
  actions: {
    async postUser(state, payload) {
      console.log(payload)
      const insert = await fetch('http://localhost:3000/users');
      const resInsert = await insert.json();
      console.log(resInsert)

    }
  },
  modules: {
  }
})
