// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router/index'

import axios from 'axios'
import qs from 'qs'
import { Icon, base64 } from 'vux'
import './assets/css/app.scss'
import animated from 'animate.css'

base64.encode('VUX')
base64.decode('VlVY')
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs

Vue.use(VueRouter, animated)
Vue.component('icon', Icon)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
