<script>
/* eslint-disable vue/require-default-prop */

import ms from "milsymbol";
import escape from "lodash.escape";

// Temporary solution until the next version of milsymbol is released
function escapeAmplifiers(amps) {
  const escapedAmplifiers = {};
  if (amps !== null && typeof amps === "object") {
    Object.keys(amps).forEach(key => {
      escapedAmplifiers[key] = escape(amps[key]);
    });
  }
  return escapedAmplifiers;
}

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

  render(h) {
    const symb = new ms.Symbol(
      this.sidc,
      {
        size: this.size,
        simpleStatusModifier: this.simpleStatusModifier
      },
      escapeAmplifiers(this.amplifiers) || {} // no XSS please :-)
    );
    return h("span", {
      attrs: { class: "milsymbol" },
      domProps: { innerHTML: symb.asSVG() }
    });
  }
};

// This is how you can change the frame fill color:
// var cm = ms.getColorMode("Light");
// cm.Friend = cm.Neutral;
// var symb = new ms.Symbol(sidc, {colorMode:cm});
// symb.setOptions({fillColor: "rgb(255,0,0)"})
</script>
