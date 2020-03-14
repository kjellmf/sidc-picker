<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawerRight" fixed right clipped app>
      <saved-symbols />
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer" fixed app class="mdrawer">
      <v-list dense>
        <v-toolbar prominent flat class="transparent">
          <v-toolbar-title>Military symbology picker</v-toolbar-title>
        </v-toolbar>
        <v-subheader>Navigation</v-subheader>
        <v-list-tile :to="homelocation">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Picker</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/help/">
          <v-list-tile-action>
            <v-icon>help_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Help</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/about/">
          <v-list-tile-action>
            <v-icon>info_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile href="https://github.com/kjellmf/sidc-picker">
          <v-list-tile-action>
            <v-icon>code</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>GitHub repo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <router-view name="drawer" />
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dense fixed app class="mtoolbar">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
      <router-view name="toolbar" />
      <v-spacer />
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight" />
    </v-toolbar>
    <v-content>
      <router-view :key="autocomplete" />
      <snack-message />
    </v-content>
  </v-app>
</template>

<script>
import SnackMessage from "@/components/SnackMessage.vue";
import { SettingsMixins } from "./views/mixins";
import SavedSymbols from "./components/SavedSymbols.vue";

export default {
  components: { SavedSymbols, SnackMessage },
  mixins: [SettingsMixins],
  data: () => ({
    drawer: null,
    drawerRight: null
  }),

  computed: {
    homelocation() {
      return { name: "home", params: { standard: this.$store.state.standard } };
    }
  },

  created() {
    this.$store.dispatch("changeStandard", this.$store.state.standard);
  },

  mounted() {
    if (this.$vuetify.breakpoint.smAndDown) {
      this.autocomplete = false;
    }
  }
};
</script>

<style>
.v-toolbar--fixed.mtoolbar {
  z-index: 3;
}

.v-overlay--active {
  z-index: 4 !important;
}

.mdrawer {
  z-index: 5 !important;
}
</style>
