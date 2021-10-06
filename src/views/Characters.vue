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
        <option selected value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>   
      <button @click="handleClick(search, status)">Let's Search</button><br>
      
      <h2 class="title is-1">{{ page }}</h2>
      <button 
        v-if="this.page != 1" 
        @click="pagePrevious()"
      >
        Previous
      </button>
      <button 
        v-if="this.page != this.characters.info.pages" 
        @click="pageNext()"
      >
        Next
      </button>

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
      page: 1,
    }
  },
  methods: {
    pageNext(){
      // Check if the last page is reached then null out of the function if it's the case
      this.page === this.characters.info.pages ? null :
      this.page += 1
      // Dispatch Payload to fetch the proper page
      let payload = {'search': this.search, 'status': this.status, 'page': this.page}
      this.$store.dispatch('getSearchCharacters', payload);

    },
    pagePrevious(){
      // Check if the first page is reached then null out of the function if it's the case
      this.page === 1 ? null : 
      this.page -= 1
      // Dispatch Payload to fetch the proper page
      let payload = {'search': this.search, 'status': this.status, 'page': this.page}
      this.$store.dispatch('getSearchCharacters', payload);
    
    },
    handleClick(search, status) {
      console.log("status",status)
      // Reset old Pagination as we fetch new data
      this.page = 1
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

