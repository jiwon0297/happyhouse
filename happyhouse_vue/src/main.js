import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MaterialKit from "./plugins/material-kit";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false,
};

Vue.mixin({
  data() {
    return {
      NavbarStore,
    };
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");