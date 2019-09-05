import Vue from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)
var vm = new Vue({
  render: (h) => h(App),
})
vm.$mount('#app')