<template>
  <v-app id="app">
    <v-navigation-drawer 
      v-model="drawer"
      fixed
      app
    />
    <v-toolbar dense fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>SIDC picker</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <router-view></router-view>
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
  })
};
</script>

<style>
</style>
