<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
    count() {
      return this.$store.getters.count;
    },
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>

</style>
