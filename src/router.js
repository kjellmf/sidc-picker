import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import HelpDialog from './components/HelpDialog.vue';
import HomeToolbar from './views/HomeToolbar.vue';
import AboutToolbar from './views/AboutToolbar';
import HomeDrawer from './views/HomeDrawer.vue';
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
        default: Home,
        toolbar: HomeToolbar,
        drawer: HomeDrawer,
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
