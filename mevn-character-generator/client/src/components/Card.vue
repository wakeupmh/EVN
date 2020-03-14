<template functional>
    <div class="card"> 
        <img :src="require(`@/assets/${props.image}.svg`)">
        <p>{{props.text}}</p>
        
    </div>
</template>