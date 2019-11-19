import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from './vue-scroll-to'

Vue.config.productionTip = false

Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
}).$mount('#app')
