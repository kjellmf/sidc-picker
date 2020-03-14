<template>
  <v-snackbar :timeout="timeout" v-model="snackbar" bottom left
    >{{ snackbarText }}
    <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackMessage",

  props: {
    timeout: {
      type: Number,
      default: 3000
    }
  },
  data: () => ({}),

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

<style></style>
