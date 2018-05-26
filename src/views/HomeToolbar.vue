<template>
  <div>
    <v-btn @click="doCopy" class="mx-0" v-shortkey="['alt', 'c']" @shortkey="doCopy" icon title="Copy SIDC to clipboard">
      <v-icon>assignment</v-icon>
    </v-btn>
    <v-btn class="mx-0" icon title="Clear" @click="clear" v-shortkey="['alt', 'x']" @shortkey="clear">
      <v-icon>clear</v-icon>
    </v-btn>
    <v-btn class="mx-0 px-0" flat title="Download symbol as PNG" @click="downloadPNG" href="download" download="nn.png">
      <v-icon>save_alt</v-icon>&nbsp; PNG
    </v-btn>
    <v-btn class="mx-0 px-0"  flat title="Download symbol as SVG" @click="downloadSVG" href="download" download="nn.svg">
      <v-icon>save_alt</v-icon>&nbsp; SVG
    </v-btn>
  </div>

</template>

<script>
import { Sidc } from "../symbology/sidc";
import * as ms from "milsymbol";

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
          this.$store.dispatch("showMessage", "SIDC copied to clipboard");
        })
        .catch(e => {
          console.warning("Failed to copy SIDC to clipboard");
        });
    },

    clear() {
      let oldSIDC = new Sidc(this.sidc);
      oldSIDC.hqtfd = "0";
      oldSIDC.amplifier = "0";
      oldSIDC.amplifierDescriptor = "0";

      this.sidc = oldSIDC.toString();
    },

    downloadPNG(ev) {
      let downloadSymbol = new ms.Symbol(this.sidc);
      let a = ev.currentTarget;
      a.setAttribute("href", downloadSymbol.asCanvas().toDataURL())
      a.setAttribute("download", this.sidc + ".png");
    },

    downloadSVG(ev) {
      let downloadSymbol = new ms.Symbol(this.sidc);
      let a = ev.currentTarget;
      a.setAttribute("href", downloadSymbol.toDataURL())
      a.setAttribute("download", this.sidc + ".svg");
    }
  }
};
</script>

<style>
</style>
