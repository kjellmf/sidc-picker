<template>
  <v-container>
    <v-layout>
      <v-flex
        xs12
        md10
        lg8>
        <h1>Help</h1>
        <v-divider class="my-3"/>
        <p>This web application is a simple tool for finding symbols and symbol identification codes from the
          <a href="http://www.jcs.mil/Portals/36/Documents/Doctrine/Other_Pubs/ms_2525d.pdf">MIL-STD 2525 Rev.D
          (PDF)</a>
          and <a href="http://nso.nato.int/nso/zPublic/ap/PROM/APP-6%20EDD%20V1%20E.pdf">APP-6 Ed. D (PDF)</a>
          standards. Additionally you can download symbols as images for use in presentations and documents.

        </p><h2>Actions</h2>

        <p>
          <v-btn
            fab
            small>
            <v-icon>assignment</v-icon>
          </v-btn>
          Copy the current symbol identification code to the clipboard. Useful if you need the code in another
          program.


        </p><p>
          <v-btn
            fab
            small>
            <v-icon>clear</v-icon>
          </v-btn>
          Clear/reset modifiers and text amplifiers for the current symbol.

        </p><p>
          <v-btn>
            <v-icon>save_alt</v-icon>&nbsp; PNG
          </v-btn>
          Download current symbols an an image in PNG format. Useful if you want to use the symbol in a presentation or
          a document.

        </p><p>
          <v-btn>
            <v-icon>save_alt</v-icon>&nbsp; SVN
          </v-btn>
          Download current symbols an an image in SVG format (vector graphics).

        </p><p>
          <v-btn
            fab
            small>
            <v-icon>link</v-icon>
          </v-btn>
          Create a link/URL to the current symbol. Useful if you want to share the symbol with others.

        </p><p>
          <v-btn
            fab
            small>
            <v-icon>star</v-icon>
          </v-btn>
          Add the current symbol to the "saved symbols list". The list is stored locally in your browser and will
          be available the next time you visit this site. You can find the list of saved symbols in the right sidebar. If
          the right sidebar is not visible, click the right <v-btn
            fab
            small>
            <v-icon>menu</v-icon>
          </v-btn> icon.


        </p><h2>FAQ</h2>

        <h3>How can I copy a symbol to the clipboard as an image?</h3>

        <p>In Edge and IE you can simply right click on a symbol and select 'Copy'. In Chrome and Firefox you have to
        download
        the symbol first using the
          <v-btn small>
            <v-icon>save_alt</v-icon>&nbsp; PNG
          </v-btn>
          button and then open it in an image viewer to copy it to the clipboard.


        </p><h2>Tips and tricks</h2>

        <p>Use the keyboard shortcuts for faster navigation. Press <kbd>?</kbd> to see the available shortcuts.

        </p><p>The material design theme I've used may feel a bit too spacious, especially on lower resolution screens.
        A quick solution is to use the zoom functionality of your browser typically <kbd>Ctrl +</kbd> and
          <kbd>Ctrl -</kbd>.


        </p>


      </v-flex>
    </v-layout>

  </v-container>
</template>

