import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://my-json-server.typicode.com/brunogeek9/fake-products-api';
// Vue.prototype.$http = axios;
new Vue({
  render: h => h(App),
}).$mount('#app')
