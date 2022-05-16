import Vue from 'vue'
import App from './App.vue'

import { addBackToTop } from 'vanilla-back-to-top'
addBackToTop();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
