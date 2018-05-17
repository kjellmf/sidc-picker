import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    autocomplete: true,
    simpleStatusModifier: false,
    sidc: "10031000001211000000"
  },

  mutations: {
    setAutocomplete (state, value) {
      state.autocomplete = value;
    },

    setSimpleStatusModifier (state, value) {
      state.simpleStatusModifier = value;
    },

    setSidc (state, value) {
      state.sidc = value;
    }

  },
  
  actions: {

  }
})
