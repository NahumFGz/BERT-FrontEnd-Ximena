<template>
  <div class="ui-empty-data">
    <img src="@/assets/images/no-data.svg" :alt="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "EmptyData",
  props: {
    message: {
      type: String,
      default: "No se encontraron coincidencias",
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-empty-data {
  text-align: center;
  padding: 1rem;
  img {
    max-width: 148px;
  }
  p {
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    color: #333;
    margin-top: 1rem;
    margin-bottom: 0;
  }
}
</style>