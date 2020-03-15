<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">View</router-link> |
      <router-link to="/create">Create</router-link>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
body {
  background-color:#73937E;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;

}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-up-enter {
  transform: translateY(10px);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all .4s ease;
}
</style>
