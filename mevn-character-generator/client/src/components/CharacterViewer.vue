<template>
  <div class="character-viewer">
    <h1>My Characters</h1>
    <transition-group name="slide-up" tag="div" class="container" appear>
       <Card
        v-for="(character, i) in characters"
        :key="i"
        :text="character.name"
        :image="character.profession.toLowerCase()"
      />
    </transition-group>
  </div>
</template>

<script>
const Card = () => import("./Card.vue");
export default {
  name: "CharacterViewer",
  props: {
    characters: Array
  },
  components: { 
    Card
  }
};
</script>
