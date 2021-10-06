<template>
    <div>
      <router-link :to="{ name: 'Character', params: {id: characterId}}" style="text-decoration: none; color: inherit;">
        <div id="card">
            <img :src=characterImage />
            <h2>{{ characterName }}</h2>
            <p>{{ characterGender }}</p>
            <p>{{ characterStatus }}</p>
        </div>
        </router-link> 
    </div>        
</template>

<script>
export default {
    props: {
        characterId: Number,
        characterName: String,
        characterImage: String,
        characterStatus: String,
        characterGender: String,
    },
}
</script>

<style scoped>
    #card {
        margin: 10px;
        padding: 10px;
    }
</style>

