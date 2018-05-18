<template>
<v-card>
    <v-toolbar flat color="transparent">
      <v-toolbar-title class="title">
        <span>
          <strong>SIDC</strong> {{sidc}}</span>
      </v-toolbar-title>
      <v-spacer/>
    </v-toolbar>
    <v-card-text>
      <v-layout>
        <v-flex>
          <sidc-picker v-model="sidc" :autocomplete="autocomplete" :simple-status-modifier="simpleStatusModifier" />
        </v-flex>
        <v-flex xs3 text-xs-center>
          <mil-symbol class="pl-3" :sidc="sidc" :size="50" :simple-status-modifier="simpleStatusModifier" />
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
    }
  }
};
</script>
