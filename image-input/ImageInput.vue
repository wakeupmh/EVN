<template>
  <div>
    <div
      class="image-input"
      :style="{ 
        'background-image': `url(${imageData})`,
        'width': `${width}px`,
        'height': `${height}px`,
        'border-radius': `${radius}px`
      }"
      @click="chooseImage"
    >
      <span
        v-if="!imageData"
        class="placeholder"
        :style="{ 
          'font-size':`${fontSize}` ,
          'border-radius': `${radius}px`
        }"
      >
        {{ customStrings.placeholder }}
      </span>
      <input
        class="file-input"
        ref="fileInput"
        type="file"
        @input="onSelectFile"
      >
    </div>
    <span 
      class="legend"
      v-if="imageData"
    >
      {{ customStrings.legend }}
    </span>

  </div>
</template>
<script>
export default {
  data() {
    return {
      imageData: null
    }
  },
  props:{
    customStrings: {
      type: Object
    },
    fontSize: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    },
    height: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    },
    radius: {
      type: Number,
      default: 0
    }
  },
  methods: {
    chooseImage () {
      this.$refs.fileInput.click()
    },
    onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
          this.imageData = e.target.result
          this.$emit('input', e.target.result)
          
        }
        reader.readAsDataURL(files[0])
      }
    }
  },
}
</script>
<style>
  .image-input {
    display: block;
    cursor: pointer;
    background-size: cover;
    background-position: center center;
    border-radius: 6px;
  }
  .placeholder {
    background: #f0f0f0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
    border: 1px solid grey;
  }
  .placeholder:hover {
    background: #e0e0e0;
  }
  .file-input {
    display: none;
  }
  .legend {
    color:grey;
    font-size: 10px;
  }

</style>