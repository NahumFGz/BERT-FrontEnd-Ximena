<template>
  <div class="d-flex flex-column justify-center pa-3 pa-sm-0 cfe-w-full">
    <!-- <div>
      <v-btn text color="primary" class="text-capitalize" @click="goToLogin()">
        <v-icon left dark>mdi-keyboard-backspace</v-icon>Volver a inicio
      </v-btn>
    </div> -->
    <div>
      <!-- <p class="text-subtitle-1 indigo--text text--darken-4 mb-0"> -->
      <!-- Bienvenido al -->
      <!-- </p> -->
      <p class="text-h3 indigo--text text--darken-4">
        Solicitar cambio de contrasena
      </p>
    </div>
    <div class="ml-2 mt-5">
      <p class="text-subtitle-1 grey--text text--darken-4 mb-0">
        Por favor introduce tu usuario. Recibiras un mensaje de correo
        electronico con instrucciones sobre como restablecer tu contrasena
      </p>
    </div>
    <v-form ref="form" v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="login"
              :rules="loginRules"
              label="Usuario"
              dense
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="ml-2 text-center">
      <v-btn color="primary" dark depressed class="ml-1" @click="submit()"
        >Solicitar nueva contrasena</v-btn
      >
    </div>
  </div>
</template>

<script>
// import UserService from "./../../services/user.service";
export default {
  name: "RequestPassword",
  data: () => ({
    valid: false,
    login: "",
    loginRules: [(v) => !!v || "Usuario requerido"],
    password: "",
    passwordRules: [(v) => !!v || "Contrasenia requerida"],
  }),
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    submit() {
      console.log("en submit");
      if (this.$refs.form.validate()) {
        console.log("en submit 2");
        // UserService.login(this.login, this.password);
      }
    },
  },
};
</script>

<style>
</style>