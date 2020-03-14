<template>
  <div id="app">
    <Transitions />
  </div>
</template>

<script>
import Transitions from "./components/Transitions.vue";

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
