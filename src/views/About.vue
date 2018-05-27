<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1 class="display-2">SIDC picker</h1>
        <v-divider class="my-3"></v-divider>

        <p>A MILSTD 2525/APP6 symbol identification code picker experiment. Built upon the excellent <a href="https://spatialillusions.com/milsymbol/index.html">milsymbol</a> and <a href="https://github.com/spatialillusions/milstd">milstd</a> libraries.

        <p>This project is similar to an earlier experiment, 
          <a href="https://github.com/kjellmf/military-symbology-explorer">Joint Military Symbology Explorer</a>.

        <h2>Tips and tricks</h2>

        <p>Use the keyboard shortcuts for faster navigation. Press <kbd>?</kbd> to see the available shortcuts.

        <p>The material design theme I've used may feel a bit too spacious, especially on lower resolution screens.
          A quick solution is to use the zoom functionality of your browser typically <kbd>Ctrl +</kbd> and <kbd>Ctrl -</kbd>.
          This will bring padding and font sizes down to more sane values. 
          

        <h2>Credits</h2>
        <p>Thanks to <a href="https://spatialillusions.com/">Måns Beckman</a> for publishing the
        <a href="https://spatialillusions.com/milsymbol/index.html">milsymbol</a> and <a href="https://github.com/spatialillusions/milstd">milstd</a> libraries
        as open source! 

        <h2>Technical details</h2>
        <p>Some of the tools, frameworks and libraries used:</p>
        <ul>
          <li><a href="https://github.com/spatialillusions/milsymbol">milsymbol</a></li>
          <li><a href="https://github.com/spatialillusions/milstd">milstd</a></li>
          <li><a href="https://vuejs.org/">Vue.js</a></li>
          <li><a href="https://vuetifyjs.com/en/">Vuetify</a></li>
        </ul>

      </v-flex>
    </v-layout>

  </v-container>
</template>

