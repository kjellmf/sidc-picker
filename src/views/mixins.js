import * as ms from 'milsymbol';
import {Sidc} from "../symbology/sidc";

export var SettingsMixins = {
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
    },

    standard: {
      get() {
        return this.$store.state.standard;
      },

      set(value) {
        return this.$store.dispatch('changeStandard', value);
      }
    }
  }
};

export const ActionMixins = {
  computed: {
    sidc: {
      get() {
        return this.$store.state.sidc;
      },

      set(v) {
        this.$store.commit("setSidc", v);
      }
    },
    amplifiers() {
      return this.$store.state.amplifiers;
    }
  },
  methods: {
    doCopy() {
      this.$copyText(this.sidc)
        .then(e => {
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
      let downloadSymbol = new ms.Symbol(this.sidc, this.amplifiers);
      let a;
      if (ev.currentTarget.tagName == "A") {
        a = ev.currentTarget;
      } else {
        a = ev.currentTarget.firstChild;
      }
      a.setAttribute("href", downloadSymbol.asCanvas().toDataURL());
      a.setAttribute("download", this.sidc + ".png");
    },

    downloadSVG(ev) {
      let downloadSymbol = new ms.Symbol(this.sidc, this.amplifiers);
      let a;
      if (ev.currentTarget.tagName == "A") {
        a = ev.currentTarget;
      } else {
        a = ev.currentTarget.firstChild;
      }
      a.setAttribute("href", downloadSymbol.toDataURL());
      a.setAttribute("download", this.sidc + ".svg");
    }
  }
};
