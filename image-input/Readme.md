## Installation

### npm

``` sh
npm install --save simple-vue-image-input
```
### yarn

``` sh
yarn add simple-vue-image-input
```

## Usage

```HTML
<template>
  <div class="hello">    
    <image-input
      v-model="imageData"
      :customStrings="{
        placeholder:`➕`,
        legend: `Clique no na imagem caso queira substitui-la`
      }"
      :fontSize="'2em'"
      :width="600" 
      :height="600" 
      :radius="8"
      @change="onChange"
    />
  </div>
</template>
```

```javascript
<script>
import ImageInput from 'simple-vue-image-input'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    ImageInput
  },
  methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>
```

## Props

- **width, height**: (pixels, optional) the maximum width and height of the preview container. The picture will be resized and centered to cover this area. If not specified, the preview container will expand to full width, 1:1 square ratio.
- **radius**: (percentage, optional) The border-radius value for the container. Set *radius="50"* to get a circular container. Default value: 0.
- **customStrings**: (object, optional) use this to provide one or more custom strings (see the example above). Here are the available strings and their default values:

```js
{
  placeholder: 'Tap here to select a file',
  legend: 'Tap here to select another a photo', 
}
```
   
## Events

- **change**: emitted on (successful) picture change (prefill excluded). The image is passed along with the event as a Base64 Data URI string. 

  
## TODOs

- Add tests

## Contributions

All contributions are welcome, as long as they are within the scope of the project. Please open a new issue before submitting a pull request.

You should follow the Javascript Standard Style guidelines:
https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
