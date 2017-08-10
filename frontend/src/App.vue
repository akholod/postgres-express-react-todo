<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'app',
  mounted() {
    axios.get('http://localhost:3000/api/todos/')
      .then((response) => {
        console.log(response); //eslint-disable-line
      })
      .catch((error) => {
        console.log(error);  //eslint-disable-line
      });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
