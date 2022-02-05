<template>
  <div class="d-flex flex-column justify-center">
    <!-- <div class="ml-2">
      <p class="text-subtitle-1 grey--text text--darken-4 mb-0">cambiar contrasena</p>
    </div> -->
    <div>
      <!-- <p class="text-subtitle-1 indigo--text text--darken-4 mb-0"> -->
      <!-- Bienvenido al -->
      <!-- </p> -->
      <p class="text-h3 indigo--text text--darken-4">
         Cambiar contrasena
      </p>
    </div>
    <v-form ref="form" v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Nueva contrasena"
              dense
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="confirmPassword"
              :rules="passwordRules"
              label="Confirmar nueva contrasenia"
              dense
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="text-center mt-5">
      <v-btn color="primary" dark depressed class="ml-1" @click="submit()"
        >Aceptar</v-btn
      >
    </div>
  </div>
</template>

<script>
// import UserService from "./../../services/user.service";
export default {
  name: "ChangePassword",
  data: () => ({
    valid: false,
    login: "",
    loginRules: [(v) => !!v || "Usuario requerido"],
    password: "",
    confirmPassword: "",
    passwordRules: [(v) => !!v || "Contrasenia requerida"],
  }),
  methods: {
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