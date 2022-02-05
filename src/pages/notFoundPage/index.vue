<template>
  <div
    class="fill-height d-flex flex-column align-center justify-center cfe-w-full pa-3"
  >
    <img
      style="width: 200px"
      src="./../../assets/images/file_not_render.svg"
      alt="No encontrado"
    />
    <p
      class="text-h6 text-sm-h5 text-md-h4 font-weight-bold grey--text text--darken-4 mt-6"
    >
      Lo Sentimos mucho
    </p>
    <p class="text-body-1 text-sm-h6 text-md-h5 grey--text">
      Usted cuenta con acceso al sistema, pero no tiene accesos a ninguna opcion
      del sistema. <br />
      Por favor solicite accesos al administrador de usuarios y vuelva a
      ingresar.
    </p>

    <div class="mt-5">
      <v-btn large color="primary" @click="logout()">Salir</v-btn>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/auth.service";

export default {
  name: "NotFound",
  methods: {
    logout() {
      AuthService.logout();
    },
  },
};
</script>

<style scoped>
</style>
