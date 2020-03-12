<template>
  <div id="app">
    <button v-on:click="toggle='character-viewer'">View all characters</button>
    <button v-on:click="toggle='character-creator'">Create a character</button>
    <CharacterViewer v-show="toggle==='character-viewer'" />
    <CharacterCreator v-show="toggle==='character-creator'" />
  </div>
</template>

<script>
import CharacterViewer from "@/components/CharacterViewer.vue";
import CharacterCreator from './components/CharacterCreator.vue'

export default {
  name: "Home",
  components: {
    CharacterViewer,
    CharacterCreator
  },
  data: () => {
    return {
      toggle: "character-viewer"
    }
  }
};
</script>
