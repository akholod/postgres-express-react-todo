<template>
  <div class="hello">
    <ul v-for="(todo, i) in todos" :key="i"> 
      <li>{{ todo.task }}</li>
    </ul>   
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
    todos() {
      return this.$store.getters.todos;
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
