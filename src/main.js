import Vue from 'vue';
import Vuetify from 'vuetify';
import * as ms from 'milsymbol';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vuetify/dist/vuetify.min.css';
import VueClipboard from 'vue-clipboard2';
import vshortkey from 'vue-shortkey';



Vue.use(VueClipboard);
Vue.use(Vuetify);
Vue.use(vshortkey);
Vue.config.productionTip = false;
ms.setStandard('APP6');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
