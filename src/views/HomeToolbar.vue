<template>
  <div>
    <v-btn @click="doCopy" v-shortkey="['alt', 'c']" @shortkey="doCopy" icon title="Copy SIDC to clipboard">
      <v-icon>assignment</v-icon>
    </v-btn>
  </div>

</template>

<script>
export default {
  name: "HomeToolbar",
  data: () => ({
  }),
  computed: {
    sidc: {
      get() {
        return this.$store.state.sidc;
      },

      set(v) {
        this.$store.commit("setSidc", v);
      }
    }
  },
  methods: {
    doCopy() {
      this.$copyText(this.sidc)
        .then(e => {
          console.log("Dispatch");
          this.$store.dispatch("showMessage", "SIDC copied to clipboard")
        })
        .catch(e => {
          console.warning("Failed to copy SIDC to clipboard");
        });
    }
  }
};
</script>

<style>
</style>
