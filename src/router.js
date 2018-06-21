import Vue from 'vue'
import Router from 'vue-router'
import PickerView from './views/PickerView.vue'
import About from './views/About.vue'
import HelpDialog from './components/HelpDialog.vue';
import PickerViewToolbar from './views/PickerViewToolbar.vue';
import AboutToolbar from './views/AboutToolbar';
import PickerViewDrawer from './views/PickerViewDrawer.vue';
import store from "./store.js"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      components: {
        default: About,
        toolbar: AboutToolbar,
      }
    },
    {
      path: '/:standard/:sidc(\\d+)?',
      name: 'home',
      components: {
        default: PickerView,
        toolbar: PickerViewToolbar,
        drawer: PickerViewDrawer,
      },
      children: [{
        path: 'help',
        name: 'keyboardShortcuts',
        components: {
          dialogs: HelpDialog,
        },
      },]
    },
    {
      path: '/', redirect: {name:'home', params:{standard:store.state.standard}}
    }

  ]
})