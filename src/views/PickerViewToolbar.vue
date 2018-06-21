<template>
  <div>
    <v-btn @click="doCopy" class="mx-0" v-shortkey="['alt', 'c']" @shortkey="doCopy" icon
           title="Copy SIDC to clipboard">
      <v-icon>assignment</v-icon>
    </v-btn>
    <v-btn class="mx-0" icon title="Clear" @click="clear" v-shortkey="['alt', 'x']" @shortkey="clear">
      <v-icon>clear</v-icon>
    </v-btn>
    <v-btn class="mx-0 px-0" flat title="Download symbol as PNG" @click="downloadPNG">
      <v-icon>save_alt</v-icon>&nbsp; PNG
    </v-btn>
    <v-btn class="hidden-xs-only mx-0 px-0" flat title="Download symbol as SVG" @click="downloadSVG">
      <v-icon>save_alt</v-icon>&nbsp; SVG
    </v-btn>
    <v-btn class="mx-0 px-0" icon title="Permalink" :to="permalink">
      <v-icon>link</v-icon>
    </v-btn>
    <v-btn class="mx-0 px-0" icon title="Save symbol" @click="saveSymbol">
      <v-icon>star</v-icon>
    </v-btn>
  </div>
</template>

<script>
import {ActionMixins, SettingsMixins} from "./mixins";

export default {
  name: "HomeToolbar",
  mixins: [SettingsMixins, ActionMixins],
  data: () => ({}),
};
</script>

<style>
</style>
