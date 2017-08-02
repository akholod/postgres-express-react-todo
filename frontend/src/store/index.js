import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    state: {
      todos: [
        {
          task: 'Code',
          completed: true,
        },
        {
          task: 'Sleep',
          completed: false,
        },
        {
          task: 'Eat',
          completed: false,
        },
      ],
    },
    actions,
    getters,
    mutations,
  });
}
