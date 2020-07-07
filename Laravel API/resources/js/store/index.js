import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: '',
    user: {},
    entity: null,
    email_conf: null,
    entity_name: null,
    user_id: null,
    entity_id : null,
    entity_users : {},
    entity_channel : {},
    // entity: localStorage.getItem('has_entity'),
    // email_conf: localStorage.getItem('email_confirmed'),
  },

  mutations: {
    // auth_request(state){
    //   state.status = 'loading'
    // },
    // auth_error(state){
    //   state.status = 'error'
    // },
    auth_success(state, payload){
      //console.log('we are in auth_store '+ payload.user);
      // State.NameSameState = Payload.NameSameFirstVAL dispatch in vue module
      state.status = 'success';
      state.token = payload.token;
      state.user = payload.user;
      state.entity = payload.entity;
      state.email_conf = payload.email;

      state.user_id = payload.user_id;
      state.entity_id = payload.entity_id;
      state.entity_name = payload.entity_name;
      state.entity_users = payload.entity_users;
      state.entity_channel = payload.entity_channel;
    },
    set_entity_name(state,payload){
      state.entity_name = payload.entity_name;
    },

    auth_logout(state){
      state.status = ''
      state.token = ''
    },
  },
  actions: {
      setSucccess({commit},payload) {
        commit('auth_success',payload)
      },
      setEntityName({commit},payload) {
        commit('set_entity_name',payload)
      },
      setLogout({commit}) {
        commit('auth_logout')
      }
    },
    getters: {
      getLoginData(state) {
        return {
          status : state.status,
          token : state.token,
          user : state.user,
          entity : state.entity,
          email_conf : state.email_conf,
          entity_name : state.entity_name,

          user_id : state.user_id,
          entity_id : state.entity_id,
          entity_users : state.entity_users,
          entity_channel : state.entity_channel,
        }
      }

      // isLoggedIn: state => !!state.token,
      // authStatus: state => state.status,
    },
    modules: {
    }
})
