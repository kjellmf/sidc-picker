<template>
  <component
    ref="sdata"
    :is="autocomplete ? 'v-autocomplete' : 'v-select'"
    :items="items"
    :label="label"
    v-model="myValue"
  >
    <template slot="item" slot-scope="data">
      <v-list-tile-avatar>
        <mil-symbol
          :size="20"
          :sidc="data.item.sidc"
          :simple-status-modifier="simpleStatusModifier"
        />
      </v-list-tile-avatar>
      <v-list-tile-content v-text="data.item.text" />
    </template>
  </component>
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
    value: String,
    simpleStatusModifier: null
  },

  data: () => ({
    myValue: null
  }),

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
  },

  created() {
    this.myValue = this.value;
  }
};
</script>

<style>
.menu__content a.list__tile {
  min-height: 48px;
  height: auto;
}
</style>
