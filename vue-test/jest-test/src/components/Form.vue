<template>
  <div>
    <form action="" @submit.prevent="onSubmit(inputValue)">
      <input type="text" v-model="inputValue">
      <span class="reversed">{{ reversedInput }}</span>
      <button type="submit"> Send </button>
      
    </form>
    <br>
    <p v-for="res in results" class="result"> {{ res.title }} </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ["reversed"],
  data: () => ({
    inputValue: "",
    results: []
  }),
  computed: {
    reversedInput() {
      return this.reversed ?
        this.inputValue.split("").reverse().join("") :
        this.inputValue;
    }
  },
  methods: {
    onSubmit(value) {
      const getPromise = axios.get(`https://jsonplaceholder.typicode.com/posts?q=${value}`)
      getPromise.then(results => {
        this.results = results.data
      })
      return getPromise
    }
  },
  watch: {
    inputValue(newVal, oldVal) {
      if (newVal.trim().length && newVal !== oldVal) {
        console.log(newVal)
      }
    }
  }
};
</script>