<template>
  <div class="h-40 d-flex justify-center align-center">
    <div class="w-4/5 text-center">
      <p>{{ message }}</p>
      <v-progress-linear
        indeterminate
        rounded
        height="6"
        color="yellow darken-2"
      ></v-progress-linear>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingContentLinear",
  props: {
    message: {
      type: String,
      default: "Cargando ...",
    },
    color: {
      type: String,
      default: "primary",
    },
  },
};
</script>

