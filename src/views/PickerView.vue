<template>
  <v-container>
    <v-flex xs12 md7>
      <v-form v-model="valid">
        <v-text-field
          v-model="inputSidc"
          :rules="sidcRules"
          class="sidc-field"
          label="SIDC"
          mask="##-#-#-##-#-#-##-######-##-##"
          permament
        />
      </v-form>
    </v-flex>
    <v-layout v-bind="binding">
      <v-flex text-xs-center xs12 md5 order-md2 class="symbol-sticky">
        <mil-symbol
          :key="standard ^ simpleStatusModifier"
          :sidc="sidc"
          :size="50"
          :amplifiers="amplifiers"
          :simple-status-modifier="simpleStatusModifier"
          class="symbol-sticky"
        />
      </v-flex>
      <v-flex xs12>
        <search-symbols :standard="standard" @input="updateFromSearch" />
        <v-tabs
          v-shortkey="['alt', 't']"
          v-model="activeTab"
          fixed-tabs
          @shortkey.native="toggleTab"
        >
          <v-tab href="#tab-symbol" ripple>Symbol</v-tab>
          <v-tab href="#tab-amplifiers" ripple>Text amplifiers</v-tab>
          <v-tab-item value="tab-symbol">
            <sidc-picker
              v-model="sidc"
              :autocomplete="autocomplete"
              :simple-status-modifier="simpleStatusModifier"
              :standard="standard"
              @iconDescription="updateIconDescription"
            />
          </v-tab-item>
          <v-tab-item value="tab-amplifiers">
            <text-amplifiers :symbolset="symbolset" v-model="amplifiers" />
            <v-btn @click="clearAmplifiers">clear</v-btn>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
    <router-view name="dialogs" />
  </v-container>
</template>

<script>
import MilSymbol from "@/components//MilSymbol.vue";
import SidcPicker from "@/components/SidcPicker.vue";
import SearchSymbols from "@/components/SearchSymbols.vue";
import TextAmplifiers from "@/components/TextAmplifiers.vue";

import { Sidc } from "../symbology/sidc";

export default {
  name: "SymbolPicker",
  components: {
    MilSymbol,
    SidcPicker,
    SearchSymbols,
    TextAmplifiers
  },

  data: () => ({
    searchSIDC: null,
    editSIDC: true,
    inputSidc: null,
    activeTab: null,
    valid: false,
    standard: "APP6",
    sidcRules: [
      v => !!v || "Required",
      v => (v && v.length > 10) || "Invalid SIDC"
    ]
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

    symbolset() {
      return this.sidc.substr(4, 2);
    },

    amplifiers: {
      get() {
        return this.$store.state.amplifiers;
      },

      set(value) {
        this.$store.commit("setAmplifiers", value);
      }
    },

    sstandard: {
      get() {
        return this.$store.state.standard;
      },

      set(value) {
        this.$store.dispatch("changeStandard", value);
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
    },

    $route(to, from) {
      this.updateSidcFromRoute();
    }
  },

  created() {
    this.updateSidcFromRoute();
  },

  methods: {
    updateSidcFromRoute() {
      const sidc = this.$route.params.sidc;
      if (sidc && sidc !== this.sidc) {
        this.sidc = sidc;
      }
      this.amplifiers = Object.assign(this.$route.query);
      this.standard = this.$route.params.standard || "APP6";
      if (this.sstandard !== this.standard) {
        this.sstandard = this.standard;
      }
    },

    updateFromSearch(value) {
      if (!value) return;
      const oldSIDC = new Sidc(this.sidc);
      const newSIDC = new Sidc(value);
      oldSIDC.symbolSet = newSIDC.symbolSet;
      oldSIDC.entity = newSIDC.entity;
      oldSIDC.entityType = newSIDC.entityType;
      oldSIDC.entitySubType = newSIDC.entitySubType;
      this.sidc = oldSIDC.toString();
    },

    toggleTab(value) {
      if (this.activeTab === "tab-amplifiers") {
        this.activeTab = "tab-symbol";
      } else {
        this.activeTab = "tab-amplifiers";
      }
    },

    clearAmplifiers() {
      this.amplifiers = {};
    },

    updateIconDescription(text) {
      this.$store.commit("setIconDescription", text);
    }
  }
};
</script>
<style>
.symbol-sticky {
  position: sticky;
  top: 50px;
  background: #fafafa;
  z-index: 2;
}

.sidc-field {
  font-weight: bolder;
}
</style>
