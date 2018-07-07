<template>
  <div>
    <v-toolbar
      class="sticky"
      dense>
      <v-btn
        :disabled="savedSymbols.length===0"
        icon
        title="Select/unselect all"
        @click="toggleAll">
        <v-icon>done_all</v-icon>
      </v-btn>
      <v-btn
        :disabled="selected.length === 0"
        icon
        title="Delete saved symbol"
        @click="deleteSelected">
        <v-icon color="grey darken-2">delete</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list
      v-if="savedSymbols.length"
      three-line>
      <template v-for="(info,index) in savedSymbols">
        <v-list-tile
          :to="permalink(info)"
          :title="info.iconDescription">
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
          <v-list-tile-content class="">
            <mil-symbol
              :size="25"
              :sidc="info.sidc"
              :amplifiers="info.amplifiers"/>
          </v-list-tile-content>

          <!--<v-list-tile-content>-->
          <!--<mil-symbol :size="25" :sidc="info.sidc" :amplifiers="info.amplifiers"/>-->
          <!--</v-list-tile-content>-->

        </v-list-tile>
        <v-divider
          v-if="index + 1 < savedSymbols.length"
          :key="index"
        />
      </template>
    </v-list>
    <v-card
      v-else
      flat
      fill-height
      class="py-5">
      <v-card-text class="text-xs-center">
        <span class="grey--text">No symbols saved yet. <br>Use the <v-icon>star</v-icon> button to save the current symbol.</span>
      </v-card-text>
    </v-card>

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
      if (!this.allSelected || this.selected.length === 0) {
        this.selected = [...Array(this.savedSymbols.length).keys()];
        this.allSelected = true;
      } else {
        this.selected = [];
        this.allSelected = false;
      }
    },

    deleteSelected() {
      this.savedSymbols = this.savedSymbols.filter((v, i) => this.selected.indexOf(i) < 0);
      this.selected = [];
    }
  }
};
</script>

<style scoped>
  .sticky {
    position: sticky;
    top: 0px;
    z-index: 1
  }
</style>
