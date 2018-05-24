<template>
  <div>
    <v-btn @click="doCopy" v-shortkey="['alt', 'c']" @shortkey="doCopy" icon title="Copy SIDC to clipboard">
      <v-icon>assignment</v-icon>
    </v-btn>
    <v-btn icon title="Clear" @click="clear" v-shortkey="['alt', 'x']" @shortkey="clear">
      <v-icon>clear</v-icon>
    </v-btn>
  </div>

</template>

<script>
import { Sidc } from "../symbology/sidc";

export default {
  name: "HomeToolbar",
  data: () => ({
  }),
  computed: {
    sidc: {
      get() {
        return this.$store.state.sidc;
      },

      set(v) {
        this.$store.commit("setSidc", v);
      }
    }
  },
  methods: {
    doCopy() {
      this.$copyText(this.sidc)
        .then(e => {
          console.log("Dispatch");
          this.$store.dispatch("showMessage", "SIDC copied to clipboard")
        })
        .catch(e => {
          console.warning("Failed to copy SIDC to clipboard");
        });
    },

    clear() {
      let oldSIDC = new Sidc(this.sidc);
      oldSIDC.hqtfd = "0";
      oldSIDC.amplifier = "0";
      oldSIDC.amplifierDescriptor = "0"
      
      this.sidc = oldSIDC.toString();
      
    }
    
  }
};
</script>

<style>
</style>
