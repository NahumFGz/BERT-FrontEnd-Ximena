import Vue from "vue";
import VuetifyToast from "vuetify-toast-snackbar-ng";

Vue.use(VuetifyToast, {
  x: "center",
  y: "top",
});

export default new VuetifyToast({});
