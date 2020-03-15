<template>
  <div>
      <div :style="{ width: tweenedNumber + 'px'}" class="bar">
        <span> {{ tweenedNumber.toFixed(0) }} </span>
      </div>
  </div>
</template>
<script>
import gsap from 'gsap';
export default {
  data() {
    return {
      number: 0,
      tweenedNumber: 0
    }
  },
  methods:{
    randomNumber() {
      this.number = Math.floor(Math.random() * (800 - 0))
    }
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, { //this.$data acess scoped vue data
        duration: 1,
        ease: 'circ.out',
        tweenedNumber: newValue //gsap tweens up/down to the newValeu
      })
    }
  },
  created() {
    setInterval(this.randomNumber, 1500);
  }
}
</script>
<style>
  .bar {
    background-image: linear-gradient(to right, #FF5F6D, #FFC371) !important;
    color: white;
    padding: 5px;
  }
</style>