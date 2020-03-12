import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index';

Vue.use(Vuex);
const url = 'http://doit-timetracker.herokuapp.com/';
export default new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {
    setToken(state, value) {
      state.token = value;
    },
  },
  actions: {
    register({ commit }, data) {
      fetch(`${url}api/register`, { method: 'POST', body: JSON.stringify(data) })
        .then((raw) => (raw.json())).then((res) => {
          console.log(res);
          router.push('/')
        });
      commit('setToken', '');
    },
  },
  modules: {
  },
});
