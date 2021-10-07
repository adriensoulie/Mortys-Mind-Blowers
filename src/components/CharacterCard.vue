<template>
    <div>
      <router-link :to="{ name: 'Character', params: {id: characterId}}" style="text-decoration: none; color: inherit;">
        <div id="card">
            <img v-if="!characterImage" class="card-image"/>
            <img v-else class="card-image" :src=characterImage />
            <h2 class="character-name">{{ characterName }}</h2>
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
    .card-image {
        width: -webkit-fill-available;
        height: 300px;
    }
    .character-name {
        max-width: 300px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

