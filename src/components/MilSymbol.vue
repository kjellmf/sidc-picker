<template/>

<script>
import ms from "milsymbol";
import Vue from "vue";

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
      this.setSymbol();
    }
  },

  mounted() {
    this.setSymbol();
  },

  methods: {
    setSymbol() {
      const symb = new ms.Symbol(
        this.sidc,
        {size: this.size, simpleStatusModifier: this.simpleStatusModifier},
        this.amplifiers || {}
      );
      this.$el.innerHTML = symb.asSVG();
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

