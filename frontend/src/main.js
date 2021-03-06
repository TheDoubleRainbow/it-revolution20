import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueApexCharts from 'vue-apexcharts'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Buefy);
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
