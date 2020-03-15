<template>
  <div class="character-creator">
    <h1>Character Creator</h1>
    <br />
    <input type="text" placeholder="Enter an epic name 😉✨" v-model="name" />

    <transition-group name="slide-up" tag="div" class="container" appear>
      <Card
        v-for="(character, i) in characters"
        :key="i"
        :text="character"
        :image="character.toLowerCase()"
        @selected="handleClick"
      />
    </transition-group>

    <br />
    <div class="container">
      <button class="card" @click="postCharacter">
        <Loader :loading="loading" />
        <img :src="require(`@/assets/cauldron.svg`)" v-if="!loading" />
        <p v-if="!loading">Create Character</p>
        <p v-if="loading">Creating...</p>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "@/style/index.css";

const Card = () => import("./Card.vue");
const Loader = () => import("./Loader.vue");
export default {
  name: "CharacterCreator",
  components: {
    Card,
    Loader
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
        "Giant",
        "Medusa",
        "Warrior",
        "Wizard",
        "Chimera",
        "Hunter",
        "Minotaur",
        "Werewolf"
      ]
    };
  },
  methods: {
    postCharacter() {
      this.loading = !this.loading;
      setTimeout(() => {
        axios
          .post("http://localhost:3000/api/characters/create", {
            name: this.name,
            profession: this.profession
          })
          .then(() => {
            this.loading = !this.loading;
            this.$toasted.show("Character created 🎊🎉", { duration: 900 });
            this.name = null;
          });
      }, 1200);
    },
    handleClick(selected) {
      this.profession = selected;
    }
  }
};
</script>
