import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAdmin: true,
    userExist: false,
    msg: null
  },
  mutations: {
    userExist(state, payload) {
      state.userExist = payload;
    },

    changeMsg(state, payload) {
      state.msg = payload;
    },

    changeIsAdmin(state, payload) {
      state.isAdmin = payload;
    }
  },
  actions: {
    async verifyUser(context, payload) {
      const userDB = await fetch('http://localhost:3000/users');
      const users = await userDB.json();

      for(var i in users) {
        if(payload.name == users[i].name  && payload.passwd == users[i].passwd) {
          context.commit('userExist', true)
          
          if (users[i].permissionLevel == 'admin') {
            context.commit('changeIsAdmin', true)
          } else {
            context.commit('changeIsAdmin', false)
          }
          break

        }else {
          context.commit('userExist', false)
        }
      }

      if (context.state.userExist) {
        context.commit('changeMsg', 'Logged!')
        console.log(context.state.msg, context.state.isAdmin)

      } else {
        context.commit('changeMsg', 'User Doesn`t Exists!')
        console.log(context.state.msg)
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
    },

    async adminAction(context, payload) {
      const id = payload.userId;

      if (payload.adminAction == "promote") {
        const data = JSON.stringify({ permissionLevel: "admin"})

        const resPromote = fetch(`http://localhost:3000/users/${id}`, {
          method: 'PATCH',
          headers: {"Content-Type" : "application/json"},
          body: data
        })

        console.log(resPromote)
        
      } else {
        console.log('del')
      }
    }
  },
  modules: {
  }
})
