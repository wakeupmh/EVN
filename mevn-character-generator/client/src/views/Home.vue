<template>
  <div id="app">
    <CharacterViewer :characters="characters" />
  </div>
</template>

<script>
import CharacterViewer from "@/components/CharacterViewer.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    CharacterViewer
  },
  data: function() {
    return {
      characters: null
    };
  },
  methods: {
    getCharacters: function() {
      axios
        .get("http://localhost:3000/api/characters")
        .then(response => (this.characters = response.data));
    }
  },
  mounted: function() {
    this.getCharacters();
  }
};
</script>
