<template>
  <div class="home">
    <button @click="toggleModal">Open</button>
    <br>
    <transition name="fade">
      <div v-if="isOpen" class="modal">
        <button @click="toggleModal">Close</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Transitions",
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
  .fade-enter {
    opacity: 0;

  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
  
  .fade-leave-to {
    opacity: 0;
  }

  .home {
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
</style>
