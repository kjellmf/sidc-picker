<template>
  <v-container
    fluid
    grid-list-xs>
    <v-layout
      row
      wrap
      justify-space-between>
      <v-flex
        v-for="field in fields"
        :key="field.amplifierId"
        xs12
        sm6
        md6
        lg4>
        <v-text-field
          :hint="field.description"
          :label="field.label"
          v-model="amps[field.amplifierId]"
          @input="update"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {AMPLIFIERS, AMPLIFIERS_IN_SYMBOLSET} from "@/symbology/amplifiers";

export default {
  name: "TextAmplifiers",

  props: {
    value: Object,
    symbolset: String,
  },
  data: () => ({
    amps: {}
  }),

  computed: {
    fields() {
      const afields = AMPLIFIERS_IN_SYMBOLSET[this.symbolset];
      if (afields) {
        return AMPLIFIERS.filter(field => afields[field.field]);
      }
      return AMPLIFIERS;
    }
  },

  watch: {
    value(val) {
      this.updateForm();
    }
  },

  created() {
    this.updateForm();
  },

  methods: {
    update() {
      const updatedCopy = Object.assign({}, this.value, this.amps);
      this.$emit("input", updatedCopy);
    },

    updateForm() {
      this.amps = Object.assign({}, this.value);
    }
  },
};
</script>

<style>
</style>
