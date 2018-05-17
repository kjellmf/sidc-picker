import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    autocomplete: false,
  },

  mutations: {
    setAutocomplete (state, value) {
      state.autocomplete = value;
    }
  },
  
  actions: {

  }
})
