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

      for(var i in users) {
        if(payload.name == users[i].name  && payload.passwd == users[i].passwd) {
          context.commit('userExist', true)
          
          return 'User Exists!'
        } else {
          return 'Users Doesn`t Exists!'
        }
      }
    },

    async postUser(context, payload) {
      const userDB = await fetch('http://localhost:3000/users');
      const users = await userDB.json();

      for(var i in users) {
        //Verify if user name or email already exists
        if(payload.name == users[i].name && payload.email == users[i].email) {
          console.log('Name and Email Already Exists!')
        } else if(payload.name == users[i].name) {
            console.log('Name Already Exists!')
          } else if(payload.email == users[i].email) {
            console.log('Email Already Exists!')
          } else {
            //Post User
            const postUser = await fetch('http://localhost:3000/users', {
              method: 'POST',
              headers: {"Content-Type" : "application/json"},
              body: JSON.stringify(payload)
            });
            const resPostUser = await postUser.json()
            console.log(resPostUser)
          }
      }
    }
  },
  modules: {
  }
})
