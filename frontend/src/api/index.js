import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  headers: { 'Access-Control-Allow-Origin:': '*' },
});

export function getList() {
  return axios.get('todos/');
}

export function getItem(id) {
  return axios.get(`todos/${id}`);
}
export function createItem(data) {
  return axios.post('todos/', { data });
}
