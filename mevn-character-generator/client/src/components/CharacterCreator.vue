<template>
  <div class="character-creator">
    <h1>Character Creator</h1>
    <label for="character-name">Character Name: </label>
    <input type="text" id="character-name" v-model="name" placeholder="Enter a name" /> <br /><br />
    <label for="professions-list">Character Profession: </label>
    <select id="professions-list" v-model="profession">
      <option value="Mage">Mage</option>
      <option value="Thief">Thief</option>
      <option value="Warrior">Warrior</option>
    </select>
    <p>{{name}}</p>
    <p>{{profession}}</p>
  </div>
</template>

<script>
  export default {
    name: 'CharacterCreator',
    data: function () {
      return {
        name: "",
        profession: ""
      }
    }
  }
</script>