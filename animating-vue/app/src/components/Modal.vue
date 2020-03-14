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
