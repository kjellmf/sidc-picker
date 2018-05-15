<template>
  <div class="hello">
    <mil-symbol sidc="10031004001211000000" size="40" />
  </div>
</template>

<script>
import MilSymbol from "./MilSymbol.vue";

export default {
  name: "HelloWorld",
  components: { MilSymbol },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
