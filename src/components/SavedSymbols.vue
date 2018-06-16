<template>
  <div>
    <v-toolbar class="sticky" dense>
      <v-btn icon @click="toggleAll" title="Select/unselect all">
        <v-icon>done_all</v-icon>
      </v-btn>
      <v-btn icon @click="deleteSelected" title="Delete saved symbol">
        <v-icon color="grey darken-2">delete</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list three-line v-if="savedSymbols.length">
      <template v-for="(info,index) in savedSymbols">
        <v-list-tile :to="permalink(info)">
          <v-list-tile-action @click.prevent="toggle(index)">
            <v-icon
              v-if="selected.indexOf(index) < 0"
              color="grey lighten-1"
            >
              check_box_outline_blank
            </v-icon>
            <v-icon
              v-else
              color="grey darken-2"
            >
              check_box
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <mil-symbol :size="25" :sidc="info.sidc" :amplifiers="info.amplifiers"/>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider
          v-if="index + 1 < savedSymbols.length"
          :key="index"
        ></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
import MilSymbol from "./MilSymbol.vue";

export default {
  name: "SavedSymbols",
  components: {MilSymbol},
  data: () => ({
    selected: [],
    allSelected: false
  }),

  computed: {
    savedSymbols: {
      get() {
        return this.$store.state.savedSymbols;
      },
      set(value) {
        this.$store.commit('setSavedSymbols', value);
      }
    },

  },
  methods: {
    clear() {
      this.$store.commit("clearSavedSymbols");
    },

    permalink(info) {
      return {name: 'home', params: {standard: info.standard || "APP6", sidc: info.sidc}, query: info.amplifiers};
    },

    toggle(index) {
      const i = this.selected.indexOf(index);

      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }
    },

    toggleAll() {
      if (!this.allSelected || this.selected.length == 0) {
        this.selected = [...Array(this.savedSymbols.length).keys()];
        this.allSelected = true;
      } else {
        this.selected = [];
        this.allSelected = false;
      }

    },

    deleteSelected() {
      let remaining = this.savedSymbols.filter((v, i) => this.selected.indexOf(i) < 0);
      this.savedSymbols = remaining;
      this.selected = [];
    }
  }
}
</script>

<style scoped>
  .sticky {
    position: sticky;
    top: 0px;
    z-index: 1
  }
</style>
