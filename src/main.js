import Vue from 'vue'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import App from './App.vue'
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://my-json-server.typicode.com/brunogeek9/fake-products-api';


new Vue({
  render: h => h(App),
}).$mount('#app')
