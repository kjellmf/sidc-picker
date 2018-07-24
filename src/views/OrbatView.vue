<template>
  <div
    v-resize="onResize"
    style="width:100%; height:80%; padding:0; margin:0;"/>
</template>


<script>
import 'svg-innerhtml'; // polyfill for IE11

import OrbatSymbol from "../components/OrbatSymbol";
import orbat from '../testorbat.json';
import {OrbChart} from "../orbchart";

export default {
  name: "OrbatView",
  components: {OrbatSymbol},
  data: () => ({
    resizeTimeout: null,
  }),

  created() {
    const rootUnit = orbat.rootUnits[0];
    this.orbcart = new OrbChart(rootUnit, {});
    this.rootUnit = rootUnit;
    console.log(orbat);
  },

  mounted() {
    this.drawChart();
  },

  methods: {
    onResize() {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.drawChart();
      }, 200);
    },

    drawChart() {
      const width = this.$el.clientWidth;
      const height = this.$el.clientHeight;
      this.$el.innerHTML = this.orbcart.toSVG({width, height});
    },
  }
};
</script>

<style>
  .orbat-node:hover {
    opacity: 0.5;
  }
</style>

