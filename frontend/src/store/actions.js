import {
  getList } from '../api';

export default {
  GET_TODOS_LIST: ({ commit }) => {//eslint-disable-line
    return getList()
    .then((res) => {
      commit('setTodos', res);
    })
    .catch(err => console.log(err));
  },
};
