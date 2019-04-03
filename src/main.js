import Vue from 'vue'
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/popper.min';
import  '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import 'jodit/build/jodit.min.css'
import JoditVue from 'jodit-vue'

import App from './App.vue'

Vue.use(JoditVue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
