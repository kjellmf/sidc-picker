<template>
  <div>
    <v-toolbar dense>
      <v-btn flat @click="clear">Clear</v-btn>
    </v-toolbar>
    <v-list three-line v-if="savedSymbols.length">
      <v-list-tile v-for="info in savedSymbols" >
        <v-list-tile-avatar>
          <mil-symbol :size="25" :sidc="info.sidc" :amplifiers="info.amplifiers"/>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{info.sidc}}</v-list-tile-title>
          <v-list-tile-sub-title>{{info.sidc}}</v-list-tile-sub-title>
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
    }
  },
  methods: {
    clear() {
      this.$store.commit("clearSavedSymbols");
    }
  }
}
</script>

<style scoped>

</style>
