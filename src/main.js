import Vue from "vue";
import App from "./App.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import numeral from "numeral";
import numFormat from "vue-filter-number-format";

Vue.filter("numFormat", numFormat(numeral));

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

export const EventBus = new Vue();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
