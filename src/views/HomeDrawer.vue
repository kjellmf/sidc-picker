<template>
  <div>
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
import {SettingsMixins} from "./mixins";

export default {
  mixins: [SettingsMixins]
};
</script>

<style>
</style>
