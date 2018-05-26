<template>
  <v-container>
    <v-flex xs12 md9>
      <v-form v-model="valid">
        <v-text-field class="sidc-field" label="SIDC" mask="##-#-#-##-#-#-##-######-##-##" 
        permament 
        v-model="inputSidc" 
        :rules="sidcRules" />
      </v-form>
    </v-flex>
    <v-layout v-bind="binding">
      <v-flex text-xs-center xs12 md3 order-md2 class="symbol-test">
        <mil-symbol class="symbol-test" :sidc="sidc" :size="50" :simple-status-modifier="simpleStatusModifier" />
      </v-flex>
      <v-flex xs12>
        <search-symbols @input="updateFromSearch" />
        <sidc-picker v-model="sidc" :autocomplete="autocomplete" :simple-status-modifier="simpleStatusModifier" />
      </v-flex>
    </v-layout>
    <router-view name="dialogs"></router-view>
  </v-container>

</template>

<script>
import MilSymbol from "@/components//MilSymbol.vue";
import SidcPicker from "@/components/SidcPicker.vue";
import SearchSymbols from "@/components/SearchSymbols.vue";

import { Sidc } from "../symbology/sidc";

export default {
  name: "SymbolPicker",
  components: { MilSymbol, SidcPicker, SearchSymbols },
  data: () => ({
    searchSIDC: null,
    editSIDC: true,
    inputSidc: null,
    valid: false,
    sidcRules: [
        v => !!v || 'Required',
        v => (v && v.length > 10) || 'Invalid SIDC'
      ],
  }),

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
        this.inputSidc = v;
      }
    },

    binding() {
      const binding = {};
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true;
      return binding;
    }
  },

  watch: {
    inputSidc(newValue, oldValue) {
      if (this.valid && newValue) {
        this.sidc = newValue;
      }
    }
  },

  methods: {
    updateFromSearch(value) {
      if (!value) return;
      let oldSIDC = new Sidc(this.sidc);
      let newSIDC = new Sidc(value);
      oldSIDC.symbolSet = newSIDC.symbolSet;
      oldSIDC.entity = newSIDC.entity;
      oldSIDC.entityType = newSIDC.entityType;
      oldSIDC.entitySubType = newSIDC.entitySubType;
      this.sidc = oldSIDC.toString();
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

.sidc-field {
  font-weight: bolder;
}
</style>