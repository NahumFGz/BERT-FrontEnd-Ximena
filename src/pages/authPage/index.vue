<template>
  <v-app id="inspire">
    <div
      class="d-flex align-center flex-grow-1"
      :min-height="$vuetify.breakpoint.xs ? 300 : '20vh'"
    >
      <v-row justify="center" no-gutters>
        <v-col
          cols="12"
          sm="8"
          md="6"
          lg="4"
          xl="3"
          class="
            d-flex
            align-center
            justify-center
            pa-5 pa-sm-10 pa-md-12 pa-lg-14 pa-xl-16
          "
        >
          <router-view />
        </v-col>
        <v-col md="7" lg="6" xl="4" class="d-none d-lg-block">
          <div class="img-back rounded-r-lg"></div>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Auth",
  methods: {
    goToDashboard() {
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>

<style scoped>
.img-back {
  background-image: url("./../../assets/images/auth-cover2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
}
</style>
