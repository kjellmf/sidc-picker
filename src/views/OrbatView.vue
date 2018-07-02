<template>

  <svg height="400" width="400" style="border:1px solid red">
    <g transform="translate(100,10)">
      <orbat-symbol sidc="10031003151211020000" :amplifiers="{higherFormation:'2',uniqueDesignation:'A', direction:100}"
                    :size="34"
                    @click.native="onClick" ref="ttt" @sizes="getSizes"/>
      <circle :cx="ox" :cy="oy" r="5"></circle>
      <circle :cx="ax" :cy="ay" r="5"></circle>
      <rect x="0" y="0" :width="w" :height="h" fill="none" stroke="blue"/>
    </g>

  </svg>

</template>


<script>
import OrbatSymbol from "../components/OrbatSymbol";
import 'svg-innerhtml'; // polyfill for IE11

export default {
  name: "OrbatView",
  components: {OrbatSymbol},
  data: () => ({
    ox: 0,
    oy: 0,
    ax: 0,
    ay: 0,
    w: 0,
    h: 0,
    W: 0,
    H: 0,
  }),
  created() {
    console.log(this.$el);
  },
  methods: {
    onClick(e) {
      console.log("click", e, this.$refs["ttt"]);
      console.log(this.$el.clientWidth, this.$el.clientHeight);

    },
    getSizes(sizes) {
      const {size, anchor, octagonAnchor} = sizes;
      console.log(size, anchor, octagonAnchor);
      this.ox = octagonAnchor.x;
      this.oy = octagonAnchor.y;
      this.ax = anchor.x;
      this.ay = anchor.y;
      this.w = size.width;
      this.h = size.height;
    }
  }
}
</script>


