import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vuetifyToast from "./plugins/vuetifyToast";
import VueCoreVideoPlayer from 'vue-core-video-player'
import Vue2Editor from "vue2-editor";

import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import TokenService from "./services/token.service";
import AuthService from "./services/auth.service";
import "./scss/main.scss";

Vue.config.productionTip = false;

if (TokenService.exist()) {
  AuthService.populateApiBaseHeaders();
}
// Vue.filter("titleCase", function(value) {
//   if (!value) return "";
//   value = value.toString();
//   return value
//     .toLowerCase()
//     .replace(/(^[a-z])|(\s+[a-z])/g, (s) => s.toUpperCase());
// });
import "@/filters";
Vue.use(VueCoreVideoPlayer, Vue2Editor)

new Vue({
  render: (h) => h(App),
  router,
  store,
  vuetify,
  vuetifyToast,
//   VueSocketIOExt,
  components: { App },
}).$mount("#app");
