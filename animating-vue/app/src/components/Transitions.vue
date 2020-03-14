<template>
  <div class="home">
    <button @click="toggleModal">Open</button>
    <div v-if="isOpen" class="modal">
      <button @click="toggleModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Transitions",
  data() {
    return {
      isOpen: false
    }
  }
};
</script>

<style scoped>

</style>
