<template>
  <div class="hello">
    <form @submit.prevent="addTodo">
        <input type="text" v-model="task" />
        <button type="submit">Add Todo</button>
    </form>
    <ul v-for="(todo, i) in todos" :key="i"> 
      <li :class="{completed: todo.completed}" @click="toggleTodo(todo.id)" @dblclick="removeTodo(todo.id)">{{ todo.task }}</li>
      <button @click="updateTodo(todo.id, task)">Edit</button>
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
      if (!this.task) return;
      this.$store.commit('addTodo', this.task);
      this.task = '';
    },
    toggleTodo(id) {
      this.$store.commit('toggleTodo', id);
    },
    removeTodo(id) {
      this.$store.commit('deleteTodo', id);
    },
    updateTodo(id, task) {
      if (!this.task) return;
      this.$store.commit('updateTodo', { id, task });
      this.task = '';
    },
  },
};
</script>

<style scoped>
  .completed {
    background: yellow;
  }
</style>
