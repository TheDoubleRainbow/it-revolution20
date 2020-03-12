import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index';

Vue.use(Vuex);
const url = 'https://doit-timetracker.herokuapp.com/';
export default new Vuex.Store({
  state: {
    profile: {},
    token: '',
    events: [],
    loginError: null,
  },
  mutations: {
    setProfile(state, value){
      state.profile = value;
    },
    setToken(state, value) {
      state.token = value;
      sessionStorage.token = value;
    },
    removeToken(state, value) {
      state.token = null;
      sessionStorage.removeItem('token');
    },
    setEvents(state, value){
      state.events = value;
    },
    setLoginError(state, value){
      state.loginError = value;
    }
  },
  actions: {
    register({ commit }, data) {
      commit('setLoginError', null);
      fetch(`${url}api/register`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((raw) => (raw.json())).then((res) => {
          commit('setToken', res.token);
          if (!res.errors) {
            router.push('/');
          } else {
            commit('setLoginError', res.errors.msg);
          }
        });
      commit('setToken', '');
    },
    login({ commit }, data) {
      commit('setToken', null);
      fetch(`${url}api/login`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((raw) => (raw.json())).then((res) => {
          commit('setToken', res.token);
          if (!res.errors) {
            router.push('/');
          } else {
            console.log("LOGIN_ERROR");
            commit('setLoginError', res.errors.msg);
          }
        }).catch(() => {
          console.log("CATCH_LOGIN_ERROR");
        });
      commit('setToken', '');
    },
    loginProvider({ commit }, data) {
      fetch(`${url}api/${data.provider}/callback?${new URLSearchParams(data.data)}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((raw) => (raw.json())).then((res) => {
          commit('setToken', res.token);
          if (!res.errors) {
            router.push('/');
          }
        });
      commit('setToken', '');
    },
    getProfile({commit, state}) {
      fetch(`${url}api/profile`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.token}`,
          },
        })
        .then((raw) => (raw.json())).then((res) => {
          if (!res.errors) {
            commit('setProfile', res);
          }
        });
    },
    addEvent({state}, data) {
      fetch(`${url}api/profile/tasks`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.token}`,
          },
        })
        .then((raw) => (raw.json())).then((res) => {
          if (!res.errors) {
            this.dispatch('getEvents');
          }
        });
    },
    getEvents({commit, state}) {
      fetch(`${url}api/profile/tasks`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.token}`,
          },
        })
        .then((raw) => (raw.json())).then((res) => {
          if (!res.errors) {
            commit('setEvents', res.docs);
          }
        });
    }
  },
  modules: {
  },
});
