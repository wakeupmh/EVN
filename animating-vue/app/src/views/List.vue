<template>
  <div class="list">
    <div class="input-container">
      <input type="text" v-model="newContact"
        placeholder="Insert a name 😊"/> 
      <button @click="addContact"> Add </button>
      <button @click="sortContacts"> Sort </button>
    </div>
    <transition-group name="slide-up" tag="ul" appear>
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newContact: '',
      contacts: ['Inaê', 'Dylan', 'Marcos']
    }
  },
  methods: {
    addContact() {
      this.contacts.push(this.newContact);
      this.newContact = '';
    },
    sortContacts() {
      this.contacts.sort();
    }
  }
}
</script>