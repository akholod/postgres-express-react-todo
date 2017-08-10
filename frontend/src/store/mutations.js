import uuidv4 from 'uuid/v4';

export default {
  setTodos(state, payload) {
    state.todos = payload; // eslint-disable-line no-param-reassign
  },
  addTodo(state, payload) {
    const task = {
      task: payload,
      complete: false,
      id: uuidv4(),
    };
    state.todos.push(task);
  },
  toggleTodo(state, payload) {
    state.todos = state.todos.map((t) => { // eslint-disable-line no-param-reassign
      if (t.id === payload) return { task: t.task, completed: !t.completed, id: t.id };
      return t;
    });
  },
  deleteTodo(state, payload) {
    const index = state.todos.findIndex(todo => todo.id === payload);
    state.todos.splice(index, 1);
  },
  updateTodo(state, payload) {
    const todo = state.todos.find(t => t.id === payload.id);
    todo.task = payload.task;
  },
};
