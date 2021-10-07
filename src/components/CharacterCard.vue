<template>
    <div>
        <router-link :to="{ name: 'Character', params: {id: characterId}}" style="text-decoration: none; color: inherit;">
            <div id='card'>
                <img v-if="!characterImage" class='card-image'/>
                <img v-else class='card-image' :src=characterImage />
                <h2 class='character-name'>{{ characterName }}</h2>
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
    },
}
</script>

<style scoped>
    #card {
        margin: 15px;
        will-change: transform;
        transition: transform 350ms;
        border-radius: 20px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
    #card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transition: transform 125ms;
        transform: translateY(-10px);
    }
    .card-image {
        width: -webkit-fill-available;
        height: 300px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .character-name {
        padding: 10px;
        max-width: 300px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

