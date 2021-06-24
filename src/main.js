import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import GlobalComponents from './globalComponents'
import '@/styles/styles.scss';
import moment from 'moment';

Vue.config.productionTip = false
Vue.prototype.$moment = moment;
Vue.use(GlobalComponents)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
