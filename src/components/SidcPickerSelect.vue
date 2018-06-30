<template>
  <component :is="autocomplete ? 'v-autocomplete' : 'v-select'" :items="items" :label="label" v-model="myValue"
             ref="sdata">
    <template slot="item" slot-scope="data">
      <v-list-tile-avatar>
        <mil-symbol :size="20" :sidc="data.item.sidc" :simple-status-modifier="simpleStatusModifier"></mil-symbol>
      </v-list-tile-avatar>
      <v-list-tile-content v-text="data.item.text"></v-list-tile-content>
    </template>
  </component>
</template>

<script>
import MilSymbol from "./MilSymbol.vue";

export default {
  name: "SidcPickerSelect",
  components: {MilSymbol},
  props: {
    items: {type: Array, required: true},
    autocomplete: {type: Boolean, default: false},
    label: String,
    value: String,
    simpleStatusModifier: null,
  },

  data: () => ({
    myValue: null
  }),

  created() {
    this.myValue = this.value;
  },

  watch: {
    myValue(value) {
      // console.log({...this.$refs.sdata.selectedItems[0]});
      this.$emit("input", value);
      // dirty hack
      this.$emit("selectedItem", this.$refs.sdata.selectedItems[0]);
    },

    value(value) {
      this.myValue = value;
    }
  }
};
</script>

<style>
  .menu__content a.list__tile {
    min-height: 48px;
    height: auto;
  }
</style>
