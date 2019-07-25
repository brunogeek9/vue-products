import Vue from 'vue'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import App from './App.vue'
import VueLogger from 'vuejs-logger';
const options = {
  isEnabled: true,
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
};
Vue.use(VueLogger, options);
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3001/api';


new Vue({
  render: h => h(App),
}).$mount('#app')
