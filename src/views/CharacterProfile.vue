<template>
    <div>
        <section>
            <router-link to="/characters">
                <img id="arrow-nav" src="../assets/arrow-back.png" width="30px"/>
            </router-link> 
            <img :src=character.image />
            <h2> {{ character.name }}</h2>
            <p> {{ character.gender}}</p>
            <p> {{ character.status}}</p>
        </section>
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

<style scoped>
    #arrow-nav {
        position: absolute;
        top: 0;
        left: 0;
        margin: 20px;
    }
</style>
