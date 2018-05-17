import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    autocomplete: true,
    simpleStatusModifier: false,
  },

  mutations: {
    setAutocomplete (state, value) {
      state.autocomplete = value;
    },

    setSimpleStatusModifier (state, value) {
      state.simpleStatusModifier = value;
    }

  },
  
  actions: {

  }
})
