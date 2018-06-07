import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    autocomplete: true,
    simpleStatusModifier: false,
    sidc: "10031000001211000000",
    amplifiers: {},
    snackbarText: "",
    snackbar: false
  },

  mutations: {
    setAutocomplete(state, value) {
      state.autocomplete = value;
    },

    setSimpleStatusModifier(state, value) {
      state.simpleStatusModifier = value;
    },

    setSidc(state, value) {
      state.sidc = value;
    },

    setAmplifiers(state, value) {
      state.amplifiers = value;
    },

    setSnackbarText(state, value) {
      state.snackbarText = value;
    },

    setSnackbar(state, value) {
      state.snackbar = value;
    }

  },

  actions: {
    showMessage({commit, state}, message) {
      commit('setSnackbarText', message);
      commit('setSnackbar', true);
    }
  }
})
