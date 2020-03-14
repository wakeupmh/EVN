<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Modal</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

.home {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

.home button {
  border:0px;
  padding: 12px;
  background-image: linear-gradient(to right, #FF5F6D, #FFC371);
  color: #fff;
  width: 80px;
  border-radius: 4px;
}

.modal {
  width: 50%;
  padding-bottom: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0px 3px 8px #383838ab
}

.modal button {
  margin-top: 20px;
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
/***** TRANSITIONS ******/

.fade-enter {
  opacity: 0;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}


.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;

}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

</style>
