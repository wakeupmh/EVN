<template>
  <div class="character-creator">
    <h1>Character Creator</h1>
    <br>
    <input type="text" 
      placeholder="Enter an epic name 😉✨" 
      v-model="name">

    <div class="container" >
      <Card v-for="(character, i) in characters" :key="i" 
        :text="character" 
        :image="character.toLowerCase()" 
        @selected="handleClick"
      />
    </div>
    <br>
    <div class="container">
      <button class="card" @click="postCharacter">
          <div class="sk-chase" v-if="loading">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
          </div>
          <img :src="require(`@/assets/cauldron.svg`)" v-if="!loading">
          <p v-if="!loading"> Create Character </p>
          <p v-if="loading"> Creating... </p>
      </button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import '@/style/index.css';

  const Card = () => import('./Card.vue');
  export default {
    name: 'CharacterCreator',
    components: {
      Card
    },
    data() {
      return {
        loading: false,
        name: null,
        profession: null,
        characters: [
          "Archer",
          "Scarecrow",
          "Necromancer",
          "Witch",
          "Centaur",
          "Giant" ,
          "Medusa" ,
          "Warrior",
          "Wizard",
          "Chimera",
          "Hunter",
          "Minotaur",
          "Werewolf"
        ]
      }
    },
    methods: {
      postCharacter() {
        this.loading = !this.loading;
        setTimeout(()=> {
          axios
            .post('http://localhost:3000/api/characters/create', {
              name: this.name,
              profession: this.profession
            })
            .then(()=> {
              this.loading = !this.loading;
              this.$toasted.show('Character created 🎊🎉', { duration: 900 });
              this.name = null;
          })
        }, 1200);
      },
      handleClick(selected) {
        this.profession = selected
      }
    }
  }
</script>