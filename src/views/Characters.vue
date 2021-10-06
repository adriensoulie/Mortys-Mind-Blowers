<template>
  <div class="home">
    <Header/>
    <section>
      <input 
        v-model="search"
        type="search"
        placeholder="Rick, Morty, Jerry..."
      />
      <select v-model="status" name="status" id="status">
        <option selected value="all">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>   
      <button @click="handleClick(search, status)">Let's Search</button><br>

      <div id="characters-container">
          <div v-for="character in characters.results" v-bind:key="character.id">
          <CharacterCard 
            v-bind:character="character" 
            v-bind:character-id="character.id"
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
  data: function(){
    return { 
      status: '',
      search: '',
    }
  },
  methods: {
      handleClick(search, status) {
        console.log("status",status)
        let payload = {'search': search, 'status': status}
        this.$store.dispatch('getSearchCharacters', payload);
      },
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

