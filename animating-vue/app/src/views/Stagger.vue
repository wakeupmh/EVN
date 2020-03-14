<template>
  <div id="container">
    <div v-for="card in cards" :key="card.id" class="cardStagger"></div>
  </div>
</template>
<script>
import gsap from 'gsap';
export default {
  data() {
    return {
      cards: [
        {id: 324332},
        {id: 234254},
        {id: 643646},
        {id: 779796}
      ]
    }
  },
  mounted() {
    gsap.from('.cardStagger', {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: 'power1',
      stagger: {
        each: 0.1, //delay
        from: 'center' //where stagger starts
      }
    })
  }
}
</script>
<style scoped>
  #container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .cardStagger {
    height: 6.5em;
    width: 6.5em;
    border-radius: 5px;
    background-image: linear-gradient(to right, #FF5F6D, #FFC371);
    margin: 3px;
  }

</style>