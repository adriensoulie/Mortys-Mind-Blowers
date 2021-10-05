<template>
  <div class="home">
    <Header/>
    <section>
      <div id="characters-container">
          <div v-for="character in characters.results" v-bind:key="character.id">
          <CharacterCard v-bind:character="character" 
            v-bind:character-name="character.name"
            v-bind:character-image="character.image"
          />
        </div>
      </div>
    </section>
  </div>
</template>


<script>

import Header from '../components/Header.vue'
import CharacterCard from '../components/CharacterCard.vue'

export default {
  name: 'Characters',
  components: {
    Header,
    CharacterCard,
  },
  computed: {
    characters() {
      return this.$store.getters.characters;
    },
  },
}
</script>


<style scoped>
  #characters-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

