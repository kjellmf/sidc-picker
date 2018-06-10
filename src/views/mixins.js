export var SettingsMixins = {
  computed: {
    autocomplete: {
      get() {
        return this.$store.state.autocomplete;
      },

      set(v) {
        this.$store.commit("setAutocomplete", v);
      }
    },

    simpleStatusModifier: {
      get() {
        return this.$store.state.simpleStatusModifier;
      },
      set(v) {
        this.$store.commit("setSimpleStatusModifier", v);
      }
    },

    standard: {
      get() {
        return this.$store.state.standard;
      },

      set(value) {
        return this.$store.dispatch('changeStandard', value);
      }
    }
  }
}
