import * as ms from 'milsymbol';
import {Sidc} from "../symbology/sidc";
import {AMPLIFIERS, AMPLIFIERS_IN_SYMBOLSET} from "../symbology/amplifiers";

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
        this.$store.dispatch('changeStandard', value);
        this.$router.push({name: "home", params: {standard: value}});
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
    },
    symbolset() {
      return this.sidc.substr(4, 2);
    },

    filteredAmplifiers() {
      let amps = AMPLIFIERS;
      let afields = AMPLIFIERS_IN_SYMBOLSET[this.symbolset];
      if (afields) {
        amps = AMPLIFIERS.filter(field => afields[field.field])
      }

      let fAmplifiers = {};
      amps.forEach(f => {
        if (this.amplifiers[f.amplifierId]) {
          fAmplifiers[f.amplifierId] = this.amplifiers[f.amplifierId]
        }
      });
      return fAmplifiers;
    },

    permalink() {
      return {
        name: 'home',
        params: {standard: this.standard || "APP6", sidc: this.sidc},
        query: this.filteredAmplifiers
      };
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
      oldSIDC.modifierOne = "00";
      oldSIDC.modifierTwo = "00";
      this.sidc = oldSIDC.toString();
      this.$store.commit("setAmplifiers", {});
    },

    downloadPNG(ev) {
      let downloadSymbol = new ms.Symbol(this.sidc, this.amplifiers);
      let a;
      if (ev.currentTarget.tagName === "A") {
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
      if (ev.currentTarget.tagName === "A") {
        a = ev.currentTarget;
      } else {
        a = ev.currentTarget.firstChild;
      }
      a.setAttribute("href", downloadSymbol.toDataURL());
      a.setAttribute("download", this.sidc + ".svg");
    },

    saveSymbol() {
      let symbolInfo = {sidc: this.sidc, amplifiers: {...this.filteredAmplifiers}, standard: this.standard}
      this.$store.dispatch("saveSymbol", symbolInfo)
        .then(e => this.$store.dispatch("showMessage", "Symbol saved"));
    }
  }
};
