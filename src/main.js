import Vue from 'vue'
import App from './App.vue'
import store from './store'


// Vuesax Component Framework
import Vuesax from 'vuesax'
Vue.use(Vuesax)


// Vue Router
import router from './router'

// Styles: SCSS
// import './assets/scss/main.scss'

import '@/assets/css/adminlte.css';

import '@/assets/plugins/fontawesome-free/css/all.css';

import '@/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


