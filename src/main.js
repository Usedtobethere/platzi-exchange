import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/tailwind.css"

import router from "@/router.js"
import { dollarFilter, percentageFilter } from '@/filters'

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import {VueSpinners} from '@saeris/vue-spinners'

Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))

Vue.filter('dollar', dollarFilter)
Vue.filter('percentage', percentageFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
