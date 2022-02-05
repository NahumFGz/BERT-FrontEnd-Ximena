<template>
  <div id="app" >
    <router-view />
    <confirm ref="confirm"></confirm>
  </div>
</template>

<script>
import Confirm from "@/components/Confirm";
export default {
  name: "App",
  components: { Confirm },
  mounted() {
    this.$root.$confirm = this.$refs.confirm;
  },
};
</script>
<style scoped>

</style>

