<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
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
        <v-subheader>Settings</v-subheader>
        <v-list-tile @click="simpleStatusModifier=!simpleStatusModifier">
          <v-list-tile-action>
            <v-switch @click.stop v-model="simpleStatusModifier" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Use simple status modifier</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="autocomplete=!autocomplete">
          <v-list-tile-action>
            <v-switch @click.stop v-model="autocomplete" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Autocomplete</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


      </v-list>
    </v-navigation-drawer>
    <v-toolbar dense fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>SIDC picker</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <router-view :key="autocomplete ^ simpleStatusModifier"></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
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
  }
};
</script>

<style>
</style>
