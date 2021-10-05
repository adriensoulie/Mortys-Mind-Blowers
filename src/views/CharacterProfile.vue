<template>
    <div>
        <img :src=character.image />
        <h2> {{ character.name }}</h2>
        <p> {{ character.gender}}</p>
        <p> {{ character.status}}</p>
    </div>
</template>


<script>
export default ({
computed: {
    character() {
        return this.$store.getters.character;
    },
},
})
</script>
