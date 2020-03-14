<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Transitions />
  </div>
</template>

<script>
import HelloWorld from "./components/Transitions.vue";

export default {
  name: "App",
  components: {
    Transitions
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
