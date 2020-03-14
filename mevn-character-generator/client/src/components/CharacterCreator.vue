<template>
  <div class="character-creator">
    <h1>Character Creator</h1>
    <div class="container" >
      <Card v-for="(character, i) in characters" :key="i" 
      :text="character" 
      :image="character.toLowerCase()" 
      />
    </div>
        
      <label for="character-name">Character Name: </label>
      <input type="text" id="character-name" v-model="name" placeholder="Enter a name" /> <br /><br />
      <label for="professions-list">Character Profession: </label>
      <select id="professions-list" v-model="profession">
          <option value="Mage">Mage</option>
          <option value="Thief">Thief</option>
          <option value="Warrior">Warrior</option>
      </select><br /><br />
      <button v-on:click="postCharacter">Create Character</button>
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
    data: function () {
      return {
        name: null,
        profession: null,
        characters: [
          "Archer",
          "Crow",
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
      postCharacter: function () {
        axios
          .post('http://localhost:3000/characters/create', {
            name: this.name,
            profession: this.profession
          });
      }
    }
  }
</script>