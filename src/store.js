import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import * as ms from 'milsymbol';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({key: "SIDC", paths: ["standard", "simpleStatusModifier"]})],
  state: {
    autocomplete: true,
    simpleStatusModifier: false,
    sidc: "10031000001211000000",
    amplifiers: {},
    snackbarText: "",
    snackbar: false,
    standard: "APP6"
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
    },

    setStandard(state, value) {
      state.standard = value;
    }

  },

  actions: {
    showMessage({commit, state}, message) {
      commit('setSnackbarText', message);
      commit('setSnackbar', true);
    },

    changeStandard({commit, state}, standard) {
      commit('setStandard', standard);
      ms.setStandard(state.standard);
    },

    saveSymbol({commit, state}, symbolInfo) {
      console.log(symbolInfo);
    }
  }
})
