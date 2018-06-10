<template>
  <div>
    <v-subheader>Actions</v-subheader>
    <v-list-tile @click="doCopy">
      <v-list-tile-action>
        <v-icon>assignment</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Copy SIDC to clipboard</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile @click="clear">
      <v-list-tile-action>
        <v-icon>clear</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Clear</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile @click="downloadPNG" href="download" download="nn.png">
      <v-list-tile-action>
        <v-icon>save_alt</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Download symbol as PNG</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile @click="downloadSVG" href="download" download="nn.svg">
      <v-list-tile-action>
        <v-icon>save_alt</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Download symbol as SVG</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile :to="sidc">
      <v-list-tile-action>
        <v-icon>link</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Permalink</v-list-tile-title>
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
    <v-list-tile two-line>
      <v-list-tile-content>
        <v-radio-group v-model="standard" row>
          <v-radio label="APP6-D" value="APP6"/>
          <v-radio label="2525-D" value="2525"/>
        </v-radio-group>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
import {ActionMixins, SettingsMixins} from "./mixins";

export default {
  mixins: [SettingsMixins, ActionMixins]
};
</script>

<style>
</style>
