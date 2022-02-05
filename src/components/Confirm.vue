<template>
  <v-dialog
    v-model="dialog"
    persistent
    :max-width="width"
    :style="{ zIndex: zIndex }"
    @keydown.esc="cancel"
  >
    <v-card>
      <v-toolbar dark :color="type" dense flat>
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-4" v-html="message"></v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn color="grey" text @click.native="cancel" v-if="!isSuccess"
          >Cancelar</v-btn
        >
        <v-btn :color="type" depressed dark @click.native="agree"
          >Aceptar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
/**
 * Vuetify Confirm Dialog component
 *
 * Call it:
 * this.$root.confirm.open('Delete', 'Are you sure?', 'success').then((confirm) => {})
 *
 * 3rd param can be 'success', 'error', 'warning'
 */
export default {
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    message: null,
    title: null,
    isSuccess: false,
    type: "error",
    width: 420,
    zIndex: 200,
  }),
  methods: {
    open(title, message, type) {
      this.dialog = true;
      this.title = title || "Advertencia";
      this.message = message || "";
      this.type = type || "error";
      this.isSuccess = type === "success";
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    agree() {
      this.resolve(true);
      this.dialog = false;
    },
    cancel() {
      this.resolve(false);
      this.dialog = false;
    },
  },
};
</script>