<template>
  <v-card>
    <v-toolbar relative flat color="transparent">
      <v-toolbar-title class="title">
        <span>
          <strong>SIDC</strong> {{sidc}}</span>
      </v-toolbar-title>
      <v-spacer/>
    </v-toolbar>
    <v-card-text>
      <v-layout v-bind="binding">
        <v-flex text-xs-center xs12 md3 order-md2 >
          <mil-symbol class="symbol-test" :sidc="sidc" :size="50" :simple-status-modifier="simpleStatusModifier" />
        </v-flex>
        <v-flex>
          <sidc-picker v-model="sidc" :autocomplete="autocomplete" :simple-status-modifier="simpleStatusModifier" />
        </v-flex>

      </v-layout>
    </v-card-text>
  </v-card>

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
  position:sticky; 
  top:60px;
}
</style>