import Vue from 'vue';
import { plugin } from 'vue-function-api';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(plugin);

new Vue({
  router,
  store,
  render: createElement => createElement(App),
}).$mount('#app');
