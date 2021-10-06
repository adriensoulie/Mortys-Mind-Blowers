<template>
    <div>
      <router-link :to="{ name: 'Character', params: {id: characterId}}" style="text-decoration: none; color: inherit;">
      <!-- <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link> -->
        <div id="card" v-on:click="handleClick(characterId)">
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
    methods: {
      handleClick(id) {
        console.log(id);
        this.$store.dispatch('getCharacterById', id);
      },
  },
}
</script>

<style scoped>
    #card {
        margin: 10px;
        padding: 10px;
    }
</style>

