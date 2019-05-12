// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from '@/store/store'
import VueSession from 'vue-session'
import { sync } from 'vuex-router-sync'

Vue.use(VueSession)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueSession,
  components: { App },
  template: '<App/>'
})
