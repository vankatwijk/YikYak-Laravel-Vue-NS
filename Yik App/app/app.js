import Vue from "nativescript-vue";

//simple routing script
import routes from "./routes";
//import BackendService from "./services/backend-service";

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;


//plugins to be used with this application
Vue.config.silent = false;//set to false to see output logs
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
Vue.registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView)
import RadListView from 'nativescript-ui-listview/vue';
Vue.use(RadListView);

// const backendService = new BackendService();
// Vue.prototype.$backendService = backendService;

//start the vue application
new Vue({
  render: h => h("frame", [h(routes.background)])
}).$start();
