<template>
  <svg height="100%" width="100%" style="border:1px solid red">
    <orbat-symbol sidc="10031003151211020000" :amplifiers="{higherFormation:'2',uniqueDesignation:'A'}" :size="64"
                  @click.native="onClick" ref="ttt" @sizes="getSizes"/>
    <circle :cx="ox" :cy="oy" r="5"></circle>
  </svg>
</template>

<script>
import OrbatSymbol from "../components/OrbatSymbol";

export default {
  name: "OrbatView",
  components: {OrbatSymbol},
  data: () => ({
    ox: 0,
    oy: 0,
  }),
  methods: {
    onClick(e) {
      console.log("click", e, this.$refs["ttt"]);

    },
    getSizes(size, anchor, octagonAnchor) {
      console.log(size, anchor, octagonAnchor);
      this.ox = octagonAnchor.x;
      this.oy = octagonAnchor.y;
    }
  }
}
</script>


