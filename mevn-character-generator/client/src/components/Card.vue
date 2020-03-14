<template functional>
    <div class="card"> 
        <img :src="require(`@/assets/${props.image}.svg`)" v-if="props.image">
        <p>{{props.text}}</p>
    </div>
</template>