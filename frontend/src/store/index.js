import Vue from 'vue';
import Vuex from 'vuex';
import uuidv4 from 'uuid/v4';
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
          id: uuidv4(),
        },
        {
          task: 'Sleep',
          completed: false,
          id: uuidv4(),
        },
        {
          task: 'Eat',
          completed: false,
          id: uuidv4(),
        },
      ],
    },
    actions,
    getters,
    mutations,
  });
}
