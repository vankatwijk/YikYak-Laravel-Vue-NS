import Vue from "nativescript-vue";

import routes from "./routes";
//import BackendService from "./services/backend-service";

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;


Vue.config.silent = false;//set to false to see output logs
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
import RadListView from 'nativescript-ui-listview/vue';
Vue.use(RadListView);

// const backendService = new BackendService();
// Vue.prototype.$backendService = backendService;

new Vue({
  render: h => h("frame", [h(routes.login)])
}).$start();
