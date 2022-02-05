<template>
  <div
    class="d-flex flex-column justify-center pa-4 pa-sm-4 pa-xl-8 cfe-w-full"
  >
    <div>
      <span class="text-subtitle-1 indigo--text text--darken-4">
        Bienvenido al sistema de
      </span>
      <br />
      <span class="text-h3 indigo--text text--darken-4">Audio A Texto</span>
    </div>
    <v-form class="mt-2 mt-md-11 mt-lg-12 mt-xl-15" ref="form" v-model="valid">
      <v-text-field
        v-model="form.mail"
        :rules="loginRules"
        label="Usuario"
        outlined
        required
        append-icon="person"
      ></v-text-field>
      <v-text-field
        v-model="form.password"
        :rules="passwordRules"
        label="Contrasena"
        outlined
        required
        type="password"
        append-icon="lock"
      ></v-text-field>
      <!-- <v-text-field
        v-model="form.token"
        :rules="tokenRules"
        label="Token"
        outlined
        required
      ></v-text-field> -->
    </v-form>
    <div class="text-center">
      <v-btn
        color="primary"
        depressed
        block
        x-large
        :loading="loginLoading"
        :disabled="loginLoading"
        @click="submit()"
        >Ingresar</v-btn
      >
    </div>
    <!-- <div class="text-center mt-3"> -->
    <!-- <v-btn text class="text-capitalize" @click="goToRequestPassword()">Olvidaste tu contrasena?</v-btn> -->
    <!-- </div> -->

    <a class="text-center mt-3 black--text" href="./manual.pdf" target="_blank"
      >Ver manual</a
    >
    <div class="mt-5 body-2 grey--text text-center">Versión {{ version }}</div>

    <div class="mt-5 mt-md-12 mt-lg-14 mt-xl-16">
      <v-row>
        <v-col cols="6" align-self="center">
          <div class="d-flex align-center">
            <img
              style="width: 30px"
              src="./../../assets/icons/logo-cfe.png"
              alt="CFE"
            />
            <span class="text-caption ml-1">Carpeta Fiscal Electronica</span>
          </div>
        </v-col>
        <v-col cols="6" align-self="center">
          <div class="d-flex align-center">
            <img
              style="width: 25px"
              src="./../../assets/icons/logo-mpfn.png"
              alt="MP"
            />
            <span class="text-caption ml-1">Ministerio Publico</span>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Router from "@/router/index";
import AuthService from "@/services/auth.service";
import { Options } from "@/helpers/options.js";
// import TokenService from "@/services/token.service";

export default {
  name: "Login",
  data: () => ({
    version: process.env.VUE_APP_VERSION,
    valid: false,
    form: {
      mail: "",
      password: "",
      //   token: "",
    },
    loginRules: [(v) => !!v || "Usuario requerido"],
    passwordRules: [(v) => !!v || "Contrasena requerida"],
    tokenRules: [(v) => !!v || "Token requerido"],
    loginLoading: false,
  }),

  methods: {
    goToDashboard() {
      this.$router.push({ name: "dashboard" });
    },
    goToRequestPassword() {
      this.$router.push({ name: "requestPassword" });
    },
    goToChangePassword() {
      this.$router.push({ name: "changePassword" });
    },
    submit() {
      if (this.$refs.form.validate()) {
        let _optionDefault = null;
        let _codeOptions = ["01", "02"];

        this.loginLoading = true;
        AuthService.login({ ...this.form })
          .then((r) => {
            AuthService.populate(r.data.access_token);
            _optionDefault = Options.find((el) => el.code === _codeOptions[0]);
            if (!_optionDefault)
              _optionDefault = Options.find((el) => el.code === "00");
            Router.push({ name: _optionDefault.name });
          })
          .catch(({ response }) => {
            this.$toast.error(response.data.mensaje);
          })
          .finally(() => {
            this.loginLoading = false;
          });
      }
    },
  },
};
</script>

<style>
</style>