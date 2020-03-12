<template>
    <div class="character-viewer">
        <h1>Character Viewer</h1>
        <p>{{characters}}</p>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'CharacterViewer',
    data: function () {
      return {
        characters: null
      }
    },
    methods: {
      getCharacters: function () {
        axios
          .get('http://localhost:3000/characters')
          .then(response => (this.characters = response.data))
      }
    },
    mounted: function () {
      this.getCharacters();
    }
  }
</script>

<style scoped>
</style>