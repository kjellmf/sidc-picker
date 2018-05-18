<template>
  <v-container >
    <v-flex xs12 class="pb-3">
      <span class="title">
        <strong class="hidden-sm-and-down">SIDC</strong> {{sidc}}</span>
    </v-flex>
    <v-layout v-bind="binding">
      <v-flex text-xs-center xs12 md3 order-md2 class="symbol-test">
        <mil-symbol class="symbol-test" :sidc="sidc" :size="50" :simple-status-modifier="simpleStatusModifier" />
      </v-flex>
      <v-flex>
        <sidc-picker v-model="sidc" :autocomplete="autocomplete" :simple-status-modifier="simpleStatusModifier" />
      </v-flex>
    </v-layout>

  </v-container>

</template>

<script>
// @ is an alias to /src
import MilSymbol from "@/components//MilSymbol.vue";
import SidcPicker from "@/components/SidcPicker.vue";

export default {
  name: "SymbolPicker",
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
    },

    binding() {
      const binding = {};

      if (this.$vuetify.breakpoint.smAndDown) binding.column = true;

      return binding;
    }
  }
};
</script>
<style scoped>
.symbol-test {
  position: sticky;
  top: 50px;
  background: #fafafa;
  z-index: 4;
}
</style>