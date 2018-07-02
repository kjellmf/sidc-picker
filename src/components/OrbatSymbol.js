import ms from "milsymbol";

export default {
  name: "OrbatSymbol",
  props: {
    sidc: String,

    size: {
      type: Number,
      default: 25
    },

    simpleStatusModifier: {
      type: Boolean,
      default: false
    },

    amplifiers: {
      type: Object
    }
  },

  mounted() {
    this.setSymbol();
  },

  methods: {
    setSymbol() {
      let symb = new ms.Symbol(
        this.sidc,
        {size: this.size, simpleStatusModifier: this.simpleStatusModifier},
        this.amplifiers || {}
      );
      this.$el.innerHTML = symb.asSVG();
      this.$emit('sizes', symb.getSize(), symb.getAnchor(), symb.getOctagonAnchor());

    }
  },

  watch: {
    sidc: function (v) {
      this.setSymbol();
    },

    size: function (v) {
      this.setSymbol();
    },

    amplifiers: function (v) {
      this.setSymbol();
    }
  },

  render(h) {
    return h("g", {attrs: {class: "milsymbol"}});
  }
};
