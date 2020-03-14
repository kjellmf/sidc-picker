import "@babel/polyfill";
import Vue from "vue";
import Vuetify from "vuetify";
import * as ms from "milsymbol";
import "vuetify/dist/vuetify.min.css";
import VueClipboard from "vue-clipboard2";
import vshortkey from "vue-shortkey";

import App from "./App.vue";
import router from "./router";
import store from "./store";

/*
For offline fonts you can install

npm install --save-dev material-design-icons typeface-roboto

Move fonts folder to css/fonts


*/
// import 'material-design-icons/iconfont/material-icons.css';
// import 'typeface-roboto/index.css';

Vue.use(VueClipboard);
Vue.use(Vuetify);
Vue.use(vshortkey);
Vue.config.productionTip = false;
ms.setStandard("APP6");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
