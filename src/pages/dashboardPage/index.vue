<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      style="height: 100% !important"
    >
      <AppAside></AppAside>
    </v-navigation-drawer>
    <v-app-bar app>
      <AppHeader :drawer.sync="drawer"></AppHeader>
    </v-app-bar>
    <v-main>
      <v-container
        class="fill-height align-start pa-2 pa-sm-6 pa-md-8 pa-lg-10"
        fluid
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppAside from "./AppAside";
import AppHeader from "./AppHeader";

export default {
  name: "Dashboard",
  props: { source: String },
  components: { AppAside, AppHeader },
  data: () => ({
    drawer: null,
  }),
};
</script>

<style scoped>
</style>
