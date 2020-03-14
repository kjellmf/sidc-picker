<template>
  <v-autocomplete
    :items="allIcons"
    v-model="myValue"
    autofocus
    accesskey="s"
    label="Search"
    class="mb-3"
    prepend-icon="search"
    solo
  >
    <template slot="item" slot-scope="data">
      <v-list-tile-avatar>
        <mil-symbol :size="20" :sidc="data.item.value" />
      </v-list-tile-avatar>
      <v-list-tile-content v-text="data.item.text" />
    </template>
  </v-autocomplete>
</template>

<script>
import { app6d, ms2525d } from "milstd";
import MilSymbol from "./MilSymbol.vue";

export default {
  name: "SearchSymbols",
  components: {
    MilSymbol
  },
  props: {
    standard: { type: String, default: "APP6" }
  },
  data: () => ({
    myValue: null
  }),

  computed: {
    cstandard() {
      if (this.standard === "APP6") {
        return app6d;
      }
      return ms2525d;
    },

    ssv() {
      return Object.keys(this.cstandard).sort();
    },

    allIcons() {
      const tmp = [];
      this.ssv.forEach(ssValue => {
        const ss = this.cstandard[ssValue]["main icon"] || [];
        const mm = ss.map(mi => {
          let text = mi.entity;
          if (mi["entity type"]) text += ` - ${mi["entity type"]}`;
          if (mi["entity subtype"]) text += ` - ${mi["entity subtype"]}`;
          return {
            text,
            value: `1003${ssValue}0000${mi.code}0000`
          };
        });
        tmp.push(...mm);
      });
      return tmp;
    }
  },

  watch: {
    myValue(value) {
      this.$emit("input", value);
    },

    value(value) {
      this.myValue = value;
    }
  }
};
</script>

<style></style>
