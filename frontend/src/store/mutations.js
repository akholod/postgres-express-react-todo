import uuidv4 from 'uuid/v4';

export default {
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
};
