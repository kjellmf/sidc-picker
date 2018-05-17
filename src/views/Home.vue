<template>
  <sidc-picker v-model="sidc" :autocomplete="autocomplete" :simple-status-modifier="simpleStatusModifier" />
</template>

<script>
// @ is an alias to /src
import MilSymbol from "@/components//MilSymbol.vue";
import SidcPicker from "@/components/SidcPicker.vue";

export default {
  name: "HelloWorld",
  components: { MilSymbol, SidcPicker },
  data: () => ({}),

  props: {
    msg: String
  },

  computed: {
    autocomplete() {
      return this.$store.state.autocomplete;
    },

    simpleStatusModifier() {
      return this.$store.state.simpleStatusModifier;
    },

    sidc: {
      get() {
        return this.$store.state.sidc;
      },

      set(v) {
        this.$store.commit("setSidc", v);
      }
    }
  }
};
</script>
