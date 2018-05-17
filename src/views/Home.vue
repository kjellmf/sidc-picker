<template>
  <sidc-picker v-model="sidc" :autocomplete="autocomplete" />
</template>

<script>
// @ is an alias to /src
import MilSymbol from "@/components//MilSymbol.vue";
import SidcPicker from "@/components/SidcPicker.vue";

export default {
  name: "HelloWorld",
  components: { MilSymbol, SidcPicker },
  data: () => ({
    sidc: "10031004001211000000"
  }),

  props: {
    msg: String
  },

  computed: {
    autocomplete() {
      return this.$store.state.autocomplete;
    }
  }
};
</script>
