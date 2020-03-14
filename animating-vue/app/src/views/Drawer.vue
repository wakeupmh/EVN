<template>
  <div>
    <button @click="isOpen = !isOpen">
      My Profile 
    </button>
    <transition 
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <div v-if="isOpen" class="drawer"> 
        <img src="@/assets/logo.png" alt="avatar">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </transition>
  </div>
</template>
<script>
import Velocity from 'velocity-animate';
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.width = '0em';
    },
    enter(el, done) {
      Velocity(
        el,
        { opacity: 1, width: '12em' },
        { duration: 1000, easing: [60, 10], complete: done}
        // spring physics -> easing [tension, friction]
      )
    },
    leave(el, done) {
      Velocity(
        el,
        { opacity: 0, width: '0em' },
        { duration: 500, easing: 'easeInCubic', complete: done}
      )
    }
  }
}
</script>