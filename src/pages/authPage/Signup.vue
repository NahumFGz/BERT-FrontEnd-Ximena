
<template>
  <div>
    <h1>En Signup</h1>
    <button @click="goToLogin()">a Login</button>
  </div>
</template>

<script>
export default {
  name: "Signup",
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
</style>