import Vue from 'vue'
import App from './App'

import VueAxios from "vue-axios";
import axios from 'axios';
import router from './router';//自动扫描所有路由配置
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.prototype.$http = VueAxios;

Vue.use(Element);
Vue.use(VueAxios,axios);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
