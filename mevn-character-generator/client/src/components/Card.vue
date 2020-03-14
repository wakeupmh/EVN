<template>
  <div class="card" @click="selected" :data-text="text"> 
    <img :src="require(`@/assets/${image}.svg`)" v-if="image">
    <p>{{ text }}</p>
  </div>
</template>
<script>
export default {
  props:{
    text: String,
    image: String
  },
  methods: {
    selected(event) {
      let _this = event.target.getAttribute('data-text');
      if(_this === null)
        _this = event.target.parentElement.getAttribute('data-text');

      this.$emit('selected', _this);
    }
  }
}
</script>