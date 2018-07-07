<template>
  <div style="width:100%; height:50%; padding:0; margin:0;" v-resize.quiet="onResize">
    <svg :height="H" :width="W" style="border:1px solid red">
      <g>
        <orbat-symbol :x="W/2" :y="oy" :sidc="rootUnit.sidc"
                      :amplifiers="{uniqueDesignation:rootUnit.name, }"
                      :size="44"
                      @click.native="onClick" ref="ttt" @sizes="getSizes"/>
        <orbat-symbol :x="W/4" :y="h+oy*2" sidc="10031000151211020000"
                      :amplifiers="{uniqueDesignation:'A', }"
                      :size="34"
        />
        <orbat-symbol :x="2*W/4" :y="h+oy*2" sidc="10031000151211020000"
                      :amplifiers="{uniqueDesignation:'B', }"
                      :size="34"
        />
        <orbat-symbol :x="3*W/4" :y="h+oy*2" sidc="10031000151211020000"
                      :amplifiers="{uniqueDesignation:'C', }"
                      :size="34"
        />
      </g>

    </svg>
  </div>
</template>


<script>
import OrbatSymbol from "../components/OrbatSymbol";
import 'svg-innerhtml'; // polyfill for IE11

import orbat from '../testorbat.json';
import {OrbChart} from "../orbchart";

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
    W: 400,
    H: 400,
    resizeTimeout: null,
    rootUnit: null,
  }),

  created() {
    let rootUnit = orbat.rootUnits[0];
    let orbcart = new OrbChart(rootUnit, {});
    this.rootUnit = rootUnit;
    console.log(orbat);

  },

  mounted() {
    this.W = this.$el.clientWidth;
    this.H = this.$el.clientHeight;
  },
  methods: {
    onClick(e) {
      console.log("click", e, this.$refs["ttt"]);


    },

    onResize() {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.W = this.$el.clientWidth;
        this.H = this.$el.clientHeight;
      }, 200);
    },

    getSizes(sizes) {
      const {size, anchor, octagonAnchor} = sizes;
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


