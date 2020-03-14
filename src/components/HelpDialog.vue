<template>
  <v-dialog v-model="isOpen" max-width="500px" @keydown.esc="close">
    <v-card>
      <v-card-title class="headline">Keyboard shortcuts</v-card-title>
      <v-card-text>
        <kbd>Alt</kbd>&nbsp; <kbd>s</kbd> Go to search box
      </v-card-text>
      <v-card-text>
        <kbd>Alt</kbd>&nbsp; <kbd>c</kbd> Copy SIDC to clipboard
      </v-card-text>
      <v-card-text> <kbd>Alt</kbd>&nbsp; <kbd>x</kbd> Clear </v-card-text>
      <v-card-text> <kbd>Alt</kbd>&nbsp; <kbd>t</kbd> Switch tab </v-card-text>
      <v-card-text> <kbd>?</kbd> Show help </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="green darken-1" flat @click.native="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "HelpDialog",
  data() {
    return { isOpen: false };
  },
  watch: {
    isOpen(newValue) {
      if (newValue === false) {
        setTimeout(() => {
          this.$router.go(-1);
        }, 300);
      }
    }
  },
  mounted() {
    this.isOpen = true;
  },
  methods: {
    close() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped></style>
