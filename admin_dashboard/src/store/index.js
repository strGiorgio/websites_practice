import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAdmin: false,
    userExist: false,
  },
  mutations: {
    userExist(state, payload) {
      state.userExist = payload;
    }
  },
  actions: {
    async verifyUser(context, payload) {
      const userDB = await fetch('http://localhost:3000/users');
      const users = await userDB.json();

      for (var i in users) {
        if (payload.name == users[i].name  && payload.passwd == users[i].passwd) {
          context.commit('userExist', true)
          
          return 'User Exists!'
        } else {
          return 'Users Doesn`t Exists!'
        }
      }
    },

  },
  modules: {
  }
})
