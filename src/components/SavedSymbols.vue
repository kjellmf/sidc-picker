<template>
  <div>
    <v-toolbar dense>
      <v-btn flat @click="clear">Clear</v-btn>
    </v-toolbar>
    <v-list three-line v-if="savedSymbols.length">
      <v-list-tile v-for="(info,index) in savedSymbols" :key="index" :to="permalink(info)">
        <v-list-tile-content>
          <mil-symbol :size="25" :sidc="info.sidc" :amplifiers="info.amplifiers"/>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import MilSymbol from "./MilSymbol.vue";

export default {
  name: "SavedSymbols",
  components: {MilSymbol},
  computed: {
    savedSymbols() {
      return this.$store.state.savedSymbols || [];
    },

  },
  methods: {
    clear() {
      this.$store.commit("clearSavedSymbols");
    },

    permalink(info) {
      return {name: 'home', params: {standard: info.standard || "APP6", sidc: info.sidc}, query: info.amplifiers};
    }
  }
}
</script>

<style scoped>

</style>
