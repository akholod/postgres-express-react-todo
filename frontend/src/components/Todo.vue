<template>
  <div class="hello">
    <form @submit.prevent="addTodo">
        <input type="text" v-model="task" />
        <button type="submit">Add Todo</button>
    </form>
    <ul v-for="(todo, i) in todos" :key="i"> 
      <li :class="{completed: todo.completed}" @click="toggleTodo(todo.id)">{{ todo.task }}</li>
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
      task: '',
    };
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo', this.task);
      this.task = '';
    },
    toggleTodo(id) {
      this.$store.commit('toggleTodo', id);
    },
  },
};
</script>

<style scoped>
  .completed {
    background: yellow;
  }
</style>
