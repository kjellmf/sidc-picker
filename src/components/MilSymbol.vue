<template/>

<script>
import ms from "milsymbol";
import escape from "lodash.escape";

export default {
  name: "MilSymbol",
  props: {
    sidc: String,

    size: {
      type: Number,
      default: 15
    },

    simpleStatusModifier: {
      type: Boolean,
      default: false
    },

    amplifiers: {
      type: Object
    }
  },

  watch: {
    sidc(v) {
      this.setSymbol();
    },

    size(v) {
      this.setSymbol();
    },

    amplifiers(v) {
      this.escapeAmplifiers(v);
      this.setSymbol();
    }
  },

  mounted() {
    this.escapeAmplifiers(this.amplifiers);
    this.setSymbol();
  },

  methods: {
    setSymbol() {
      const symb = new ms.Symbol(
        this.sidc,
        {size: this.size, simpleStatusModifier: this.simpleStatusModifier},
        this.escapedAmplifiers || {}
      );
      this.$el.innerHTML = symb.asSVG();
    },

    escapeAmplifiers(amps) {
      const escapedAmplifiers = {};
      if (amps !== null && typeof amps === 'object') {
        Object.keys(amps).forEach((key) => {
          escapedAmplifiers[key] = escape(amps[key]);
        });
      }
      this.escapedAmplifiers = escapedAmplifiers;
    }
  },

  render(h) {
    return h("span", {attrs: {class: "milsymbol"}});
  }
};

// This is how you can change the frame fill color:
// var cm = ms.getColorMode("Light");
// cm.Friend = cm.Neutral;
// var symb = new ms.Symbol(sidc, {colorMode:cm});
// symb.setOptions({fillColor: "rgb(255,0,0)"})
</script>

