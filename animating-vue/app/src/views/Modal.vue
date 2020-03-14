<template>
  <div class="home">
    <h1> This is a Modal page </h1>
    <Modal />
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
  components: {
    Modal
  }
};
</script>
