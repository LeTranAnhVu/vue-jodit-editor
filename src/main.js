import Vue from 'vue'
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/popper.min';
import  '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import VueHighlightJS from 'vue-highlight.js';
// Highlight.js languages (Only required languages)
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';
import 'highlight.js/styles/default.css';

import 'jodit/build/jodit.min.css'
import JoditVue from 'jodit-vue'

import App from './App.vue'

/*
 * Use Vue Highlight.js
 */
Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    css,
    javascript,
    vue
  }
});

Vue.use(JoditVue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
