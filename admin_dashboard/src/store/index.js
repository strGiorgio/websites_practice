import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAdmin: false,
    userExist: false,
    msg: null
  },
  mutations: {
    userExist(state, payload) {
      state.userExist = payload;
    },

    changeMsg(state, payload) {
      state.msg = payload;
    }
  },
  actions: {
    async verifyUser(context, payload) {
      const userDB = await fetch('http://localhost:3000/users');
      const users = await userDB.json();

      for(var i in users) {
        if(payload.name == users[i].name  && payload.passwd == users[i].passwd) {
          context.commit('userExist', true)
          
          context.commit('changeMsg', 'Logged!')
          console.log(context.state.msg)
          break
        } else {
          context.commit('changeMsg', 'User Doesn`t Exists!')
          console.log(context.state.msg)
          break
        }
      }
    },

    async postUser(context, payload) {
      const userDB = await fetch('http://localhost:3000/users');
      const users = await userDB.json();
      context.commit('userExist', false)

      for(var i in users) {
        //Verify if user name or email already exists
        if(payload.name == users[i].name && payload.email == users[i].email) {
          console.log('Name and Email Already Exists!')
          context.commit('userExist', true)
          break
        } else if(payload.name == users[i].name) {
            console.log('Name Already Exists!')
            context.commit('userExist', true)
            break
        } else if(payload.email == users[i].email) {
            console.log('Email Already Exists!')
            context.commit('userExist', true)
            break
        } 
      }

      if (context.state.userExist) {
        context.commit('changeMsg', 'Can`t Post')
        console.log(context.state.msg)
      } else {
        const postUser = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(payload)
        });
        console.log(postUser)
      
        context.commit('changeMsg', 'User Posted!')
        console.log(context.state.msg)
      }
    }
  },
  modules: {
  }
})
