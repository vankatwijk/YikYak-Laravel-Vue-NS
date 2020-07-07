import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
// Leaflet
import VueLeaflet from '@vdcrea/vue-leaflet'
import '@vdcrea/vue-leaflet/dist/vue-leaflet.css'

Vue.prototype.$http = axios

// const token = localStorage.getItem('token');

// if ( token ) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

//Component Globally
import Home from './views/Home'
import HeaderGlobal from './components/layout/header/Header'
import FooterComponent from './components/layout/footer/Footer'

// Leaflet
Vue.use(VueLeaflet);

Vue.component('home-component', Home);
Vue.component('header-global' , HeaderGlobal);
Vue.component('footer-component' , FooterComponent);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

