<template>
  <v-select :items="items" :label="label" v-model="myValue" :autocomplete="autocomplete">
    <template slot="item" slot-scope="data">
      <v-list-tile-avatar>
        <mil-symbol :size="20" :sidc="data.item.sidc"></mil-symbol>
      </v-list-tile-avatar>
      <v-list-tile-content v-text="data.item.text"></v-list-tile-content>
    </template>
  </v-select>
</template>

<script>
import MilSymbol from "./MilSymbol.vue";

export default {
  name: "SidcPickerSelect",
  components: { MilSymbol },
  props: {
    items: { type: Array, required: true },
    autocomplete: { type: Boolean, default: false },
    label: String,
    value: String
  },

  data: () => ({
    myValue: null
  }),

  created() {
    this.myValue = this.value;
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

<style scoped>
</style>
