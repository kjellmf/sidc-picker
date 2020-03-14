<template>
  <v-container>
    <v-layout>
      <v-flex xs12 md10 lg8>
        <h1>Military symbol identification code picker</h1>
        <v-divider class="my-3" />
        <p>
          This web application is a simple tool for finding symbols and symbol
          identification codes from the
          <a
            href="http://www.jcs.mil/Portals/36/Documents/Doctrine/Other_Pubs/ms_2525d.pdf"
            >MIL-STD 2525 Rev.D (PDF)</a
          >
          and
          <a
            href="http://nso.nato.int/nso/zPublic/ap/PROM/APP-6%20EDD%20V1%20E.pdf"
            >APP-6 Ed. D (PDF)</a
          >
          standards. Built upon the excellent
          <a href="https://spatialillusions.com/milsymbol/index.html"
            >milsymbol</a
          >
          and
          <a href="https://github.com/spatialillusions/milstd">milstd</a>
          libraries.
        </p>
        <h2>Credits</h2>
        <p>
          Thanks to <a href="https://spatialillusions.com/">Måns Beckman</a> for
          publishing the
          <a href="https://spatialillusions.com/milsymbol/index.html"
            >milsymbol</a
          >
          and
          <a href="https://github.com/spatialillusions/milstd">milstd</a>
          libraries as open source! Check out his
          <a href="https://spatialillusions.com/unitgenerator.html"
            >Unit Symbol Generator</a
          >
          if you need a more customizable online symbol generator.
        </p>

        <p>
          Thanks to
          <a href="https://www.esri.com/en-us/about/about-esri">Esri</a> for
          publishing and maintaining the
          <a href="https://github.com/Esri/joint-military-symbology-xml">
            Joint Military Symbology Markup Language (JMSML) project</a
          >. Check out my earlier experiment
          <a href="https://github.com/kjellmf/military-symbology-explorer"
            >Joint Military Symbology Explorer</a
          >
          based on data from JMSML project.
        </p>

        <h2>Technical details</h2>

        <p>
          The SIDC picker was originally written as part of a larger
          application. Useful in its own right, it was extracted into a
          standalone component for easier reuse.
        </p>
        <p>Some of the tools, frameworks and libraries used:</p>
        <ul class="ml-4">
          <li>
            <a href="https://github.com/spatialillusions/milsymbol"
              >milsymbol</a
            >
          </li>
          <li>
            <a href="https://github.com/spatialillusions/milstd">milstd</a>
          </li>
          <li><a href="https://vuejs.org/">Vue.js</a></li>
          <li><a href="https://vuetifyjs.com/en/">Vuetify</a></li>
        </ul>
        <p />

        <p>
          The
          <a href="https://github.com/kjellmf/sidc-picker">source code</a> is
          available under the MIT license. Check out the project's
          <a href="https://github.com/kjellmf/sidc-picker/blob/master/README.md"
            >README</a
          >
          for download and build instructions.
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
