<template>
  <div
    class="d-flex flex-row justify-space-between align-center"
    style="width: 100%"
  >
    <div class="d-flex align-center">
      <v-app-bar-nav-icon
        @click.stop="$emit('update:drawer', !drawer)"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="d-none d-sm-block"
        >Bienvenido
        <span class="font-weight-medium">
          {{ userName }}</span
        ></v-toolbar-title
      >
    </div>
    <div class="d-flex">
      <div class="d-flex align-center">
        <v-avatar class="d-none d-sm-block">
           <v-icon >
        mdi-account-circle
      </v-icon>
        </v-avatar>
        <div class="ml-2">
          <p class="text-subtitle-2 mb-0">{{ userName }} {{ userLastname }}</p>
          <p class="text-caption mb-0">{{ userEmail }}</p>
        </div>
      </div>
      <v-menu offset-y class="ml-3">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="logout()">
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/auth.service";
import UsersService from "@/services/users.service";

export default {
  name: "AppHeader",
  props: { drawer: Boolean },
  data: () => ({
    userEmail: "",
    userName: "",
    userLastname: "",
    userLoading: false,
  }),
  mounted() {
    this.getUser();
  },
  methods: {
    logout() {
      AuthService.logout();
    },
    getUser() {
      this.userLoading = true;
      UsersService.get()
        .then((r) => {
          console.log(r);
          this.userEmail = r.data.email;
          this.userName = r.data.name;
          this.userLastname = r.data.lastname;
        })
        .catch()
        .finally(() => {
          this.userLoading = false;
        });
    },
  },
};
</script>

<style scoped>
</style>
