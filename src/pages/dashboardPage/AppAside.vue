<template>
  <div class="d-flex flex-column justify-space-between cfe-h-full">
    <v-list class="pa-0">
      <div style="height: 64px" class="flex-center-start ml-3">
        <div class="d-flex align-items-center ml-2">
          <img src="@/assets/images/logo_cfe.svg" alt="Administrador General" />
          <h2 style="font-size: 18px" class="ml-1 font-weight-regular">
            Steph
          </h2>
        </div>
      </div>
      <v-divider></v-divider>
      <div v-for="item in menuItems" :key="item.key">
        <v-list-item
          v-if="isAuthorized(item.codeOption, codeOptions)"
          link
          :class="routeActual === item.key ? 'amber darken-2' : ''"
          @click="goTo(item.key)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
    <div class="pa-3 body-2 text-center grey--text">Versión {{ version }}</div>
  </div>
</template>

<script>
import { Options } from "@/helpers/options.js";

import TokenService from "@/services/token.service";
// import { Charges } from "@/helpers/charges.js";

export default {
  name: "AppAside",
  data() {
    return {
      version: process.env.VUE_APP_VERSION,
      drawer: null,
      routeActual: "",
      menuItems: [
        // {
        //   name: "Inicio",
        //   key: "users",
        //   icon: "home",
        //   codeOption: Options.find((el) => el.name === "users").code,
        // },
        {
          name: "Predicción",
          key: "prediccion",
          icon: "folder",
          codeOption: Options.find((el) => el.name === "prediccion").code,
        },
        {
          name: "Resultados",
          key: "resultados",
          icon: "tour",
          codeOption: Options.find((el) => el.name === "resultados").code,
        },
      ],
    //   codeOptions: [],
      codeOptions: ["01", "02"],

    //   isDistrictAdministratorUser: null,
    };
  },
  watch: {
    "$route.path": {
      immediate: true,
      handler() {
        this.routeActual = this.$route.name;
      },
    },
  },
  mounted() {
    if (TokenService.exist()) {
    //   let _user = TokenService.getDecoded().usuario;
    //   let _systems = _user.sistemas;
    //   let _system = _systems.find((el) => el.codigo === "152");
    //   this.codeOptions = _system.opciones;
    //   this.isDistrictAdministratorUser =
    //     _user.codCargo === Charges.AdministradorDistrital;
    }
    this.routeActual = this.$route.name;
  },
  methods: {
    goTo(payload) {
      if (this.$route.name !== payload) this.$router.push({ name: payload });
      this.routeActual = payload;
      console.log(this.routeActual);
    },
    isAuthorized(codeOption, codeOptions) {
      if (codeOptions.length && codeOptions.includes(codeOption)) return true;
      return false;
    },
  },
};
</script>

<style>
.v-list-item--active {
  color: #ffffff !important;
}
</style>