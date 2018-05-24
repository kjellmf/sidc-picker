<template>
  <v-container>
    <v-flex xs12 md9 class="pb-3 mx-0">
      <v-layout row>
      <v-flex>
        <v-text-field class="sidc-field"
        label="SIDC" 
        mask="##-#-#-##-#-#-##-######-##-##"
        permament 
        v-model="sidc"
        />
      </v-flex>
      <v-flex xs1>
      <v-btn @click="doCopy" v-shortkey="['alt', 'c']" @shortkey="doCopy" icon flat title="Copy SIDC to clipboard">
        <v-icon>assignment</v-icon>
      </v-btn>
      </v-flex>
      </v-layout>
    </v-flex>
    <v-layout v-bind="binding">
      <v-flex text-xs-center xs12 md3 order-md2 class="symbol-test">
        <mil-symbol class="symbol-test" :sidc="sidc" :size="50" :simple-status-modifier="simpleStatusModifier" />
      </v-flex>
      <v-flex>
        <search-symbols @input="updateFromSearch" />
        <sidc-picker v-model="sidc" :autocomplete="autocomplete" :simple-status-modifier="simpleStatusModifier" />
      </v-flex>
    </v-layout>
    <router-view name="dialogs"></router-view>
    <v-snackbar :timeout="3000" bottom left v-model="snackbar">{{snackbarText}}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
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
    snackbarText: "",
    snackbar: false,
    editSIDC: true,
  }),

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
    },

    doCopy() {
      this.$copyText(this.sidc)
        .then(e => {
          this.snackbarText = "SIDC copied to clipboard";
          this.snackbar = true;
        })
        .catch(e => {
          console.warning("Failed to copy SIDC to clipboard");
        });
    },

    test() {
      console.log("Test");
      this.editSIDC = !this.editSIDC;
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