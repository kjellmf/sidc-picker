import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import HelpDialog from './components/HelpDialog.vue';
import HomeToolbar from './views/HomeToolbar.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:sidc(\\d+)?',
      name: 'home',
      components: {
        default: Home,
        toolbar: HomeToolbar
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
      path: '/about',
      name: 'about',
      component: About
    },

  ]
})
