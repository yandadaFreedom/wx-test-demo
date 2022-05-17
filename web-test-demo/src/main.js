import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VConsole from 'vconsole'
// eslint-disable-next-line no-unused-vars
const vc = new VConsole()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
