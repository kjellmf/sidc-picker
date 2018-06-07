<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-toolbar prominent flat class="transparent">
          <v-toolbar-title>Military symbology picker</v-toolbar-title>
        </v-toolbar>
        <v-subheader>Navigation</v-subheader>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
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
        <v-list-tile :to="{name:'keyboardShortcuts'}">
          <v-list-tile-action>
            <v-icon>help_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Keyboard shortcuts</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader>Settings</v-subheader>
        <v-list-tile @click="simpleStatusModifier=!simpleStatusModifier">
          <v-list-tile-action>
            <v-switch @click.stop v-model="simpleStatusModifier"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Use simple status modifier</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="autocomplete=!autocomplete">
          <v-list-tile-action>
            <v-switch @click.stop v-model="autocomplete"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Autocomplete</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dense fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-view name="toolbar"></router-view>
    </v-toolbar>
    <v-content>
      <router-view :key="autocomplete ^ simpleStatusModifier"></router-view>
      <snack-message/>
    </v-content>
    <div style="display:none">
      <a v-shortkey="{a: ['shift', '?'], b: ['?']}" @shortkey="showHelp"></a>
    </div>
  </v-app>
</template>

<script>

import SnackMessage from "@/components/SnackMessage.vue";

export default {
  components: {SnackMessage},
  data: () => ({
    drawer: null
  }),

  computed: {
    autocomplete: {
      get() {
        return this.$store.state.autocomplete;
      },
      set(v) {
        this.$store.commit("setAutocomplete", v);
      }
    },

    simpleStatusModifier: {
      get() {
        return this.$store.state.simpleStatusModifier;
      },
      set(v) {
        this.$store.commit("setSimpleStatusModifier", v);
      }
    }
  },

  mounted() {
    if (this.$vuetify.breakpoint.smAndDown) {
      this.autocomplete = false;
    }
  },

  methods: {
    showHelp() {
      this.$router.push({name: "keyboardShortcuts"})
    }
  }
};
</script>

<style>
</style>
