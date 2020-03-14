<template>
  <div>
    <v-btn
      v-shortkey="['alt', 'c']"
      class="mx-0"
      icon
      title="Copy SIDC to clipboard"
      @click="doCopy"
      @shortkey="doCopy"
    >
      <v-icon>assignment</v-icon>
    </v-btn>
    <v-btn
      v-shortkey="['alt', 'x']"
      class="mx-0"
      icon
      title="Clear modifiers and text amplifiers"
      @click="clear"
      @shortkey="clear"
    >
      <v-icon>clear</v-icon>
    </v-btn>
    <v-btn
      class="mx-0 px-0"
      flat
      title="Download current symbol as image in PNG format"
      @click="downloadPNG"
    >
      <v-icon>save_alt</v-icon>&nbsp; PNG
    </v-btn>
    <v-btn
      class="hidden-xs-only mx-0 px-0"
      flat
      title="Download current symbol as an SVG file"
      @click="downloadSVG"
    >
      <v-icon>save_alt</v-icon>&nbsp; SVG
    </v-btn>
    <v-btn
      :to="permalink"
      class="mx-0 px-0"
      icon
      title="Create a link/URL to the current symbol"
    >
      <v-icon>link</v-icon>
    </v-btn>
    <v-btn
      class="mx-0 px-0"
      icon
      title="Save symbol in browser for later retrieval"
      @click="saveSymbol"
    >
      <v-icon>star</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { ActionMixins, SettingsMixins } from "./mixins";

export default {
  name: "HomeToolbar",
  mixins: [SettingsMixins, ActionMixins],
  data: () => ({})
};
</script>

<style></style>
