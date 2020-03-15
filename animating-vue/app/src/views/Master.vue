<template>
  <div id="container">
    <div>
      <img class="paws first" src="@/assets/paws.svg" alt="fox-paws" />
      <img class="paws second" src="@/assets/paws.svg" alt="fox-paws" />
      <img class="paws third" src="@/assets/paws.svg" alt="fox-paws" />
      <img class="paws fourth" src="@/assets/paws.svg" alt="fox-paws" />

      <img id="cat" src="@/assets/cat.svg" alt="cat-logo" />
    </div>
    <br>
    <button @click="play"> Play </button>
  </div>
</template>
<script>
import gsap from 'gsap';
let masterTL = gsap.timeline();

export default {
  methods: {
    play() {
      masterTL.add(this.pawsTL());
      masterTL.add(this.catTL());
      masterTL.play();
    },
    pawsTL() {
      let tl = gsap.timeline();
      tl.to('.first', {
        opacity: 1,
        scale: 1,
        rotate: '90deg',
        duration: .5,
        ease: 'bounce.out'
      });
      tl.to('.second', {
        opacity: 1,
        scale: 1,
        rotate: '90deg',
        duration: .5,
        ease: 'bounce.out'
      }, '<.3');
      tl.to('.third', {
        opacity: 1,
        scale: 1,
        rotate: '90deg',
        duration: .5,
        ease: 'bounce.out'
      }, '<.3');
      tl.to('.fourth', {
        opacity: 1,
        scale: 1,
        rotate: '90deg',
        duration: .5,
        ease: 'bounce.out'
      }, '<.3');

      return tl;
    },
    catTL() {
      let tl = gsap.timeline();
      tl.to('#cat', {
        opacity: 1,
        filter: 'blur(0)',
        scale: 1,
        duration: .4,
        ease: 'slow'
      });
      return tl;
    }
  }
}
</script>
<style scoped>
  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5em;
  }

  #cat {
    height: 8em;
    width: 8em;
    opacity: 0;
    filter: blur(2px);
  }

  .paws {
    height: 2.5em;
    width:  2.5em;
    opacity: 0;
    transform: scale(0);
  }

  button {
    width: 100%;
  }
</style>