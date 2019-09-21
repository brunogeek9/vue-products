import Vue from 'vue'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import App from './App.vue'
const options = {
  isEnabled: true,
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
};
import VueLogger from 'vuejs-logger';
import vuetify from './plugins/vuetify';

Vue.use(VueLogger, options);

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3001/api';


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
