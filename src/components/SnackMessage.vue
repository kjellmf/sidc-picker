<template>
  <v-snackbar :timeout="timeout" bottom left v-model="snackbar">{{snackbarText}}
    <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackMessage",
  data: () => ({}),

  props: {
    timeout: {
      type: Number,
      default: 3000
    }
  },

  computed: {
    snackbarText() {
      return this.$store.state.snackbarText;
    },

    snackbar: {
      get() {
        return this.$store.state.snackbar;
      },
      set(value) {
        this.$store.commit("setSnackbar", value);
      }
    }
  }
};
</script>

<style>
</style>
