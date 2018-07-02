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
    },

    x: {
      type: Number,
      default: 25
    },
    y: {
      type: Number,
      default: 25
    }
  },

  data: () => ({
    ax: 0, ay: 0
  }),

  computed: {
    transform() {
      const x = this.x - this.ax;
      const y = this.y - this.ay;
      return `translate(${x}, ${y})`;
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

      let a = symb.getOctagonAnchor();
      this.ax = a.x;
      this.ay = a.y;
      this.$emit('sizes', {size: symb.getSize(), anchor: symb.getAnchor(), octagonAnchor: a});
      this.$el.innerHTML = symb.asSVG();
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
    return h("g", {attrs: {class: "milsymbol", transform: this.transform}});
  }
};
