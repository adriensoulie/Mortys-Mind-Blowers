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
      <div class="pagination">
        <img 
          v-if="navigation_page != 1" 
          @click="pagePrevious()"
          src="../assets/arrow-back.png" 
          height="20px" 
          width="20px"
          style="margin: 5px"
        />
        <p 
          class="title is-1" 
          :style="navigation_page != 1 ? '' : 'margin-left: 30px'"
        >
          {{ navigation_page }} / {{this.characters.info.pages}}
        </p>
        <img 
          v-if="navigation_page != this.characters.info.pages" 
          @click="pageNext()"
          class="arrow-right" 
          id="arrow-nav" 
          src="../assets/arrow-back.png" 
          height="20px" 
          width="20px"
          style="margin: 5px"
        />
      </div>
      <div
        id="characters-container"
        v-if="isLoading"
      > 
        Loading Characters...
      </div>

      <div v-else id="characters-container">
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
  created() {
    let payload = {'search': this.search, 'status': this.status, 'page': this.navigation_page}
    this.$store.dispatch('getSearchCharacters', payload);
  },
  data: function(){
    return { 
      status: '',
      search: '',
    }
  },
  methods: {
    pageNext(){
      // Check if the last page is reached then null out of the function if it's the case
      this.navigation_page === this.characters.info.pages ? null :
      this.$store.commit('INCREMENT_NAVIGATION_PAGE')
      // Dispatch Payload to fetch the proper page
      let payload = {'search': this.search, 'status': this.status, 'page': this.navigation_page}
      this.$store.dispatch('getSearchCharacters', payload);
    },
    pagePrevious(){
      // Check if the first page is reached then null out of the function if it's the case
      this.navigation_page === 1 ? null : 
      this.$store.commit('DECREMENT_NAVIGATION_PAGE')
      // Dispatch Payload to fetch the proper page
      let payload = {'search': this.search, 'status': this.status, 'page': this.navigation_page}
      this.$store.dispatch('getSearchCharacters', payload);
    },
    handleClick(search, status) {
      console.log("status",status)
      // Reset old Pagination as we fetch new data
      this.page = 1
      let payload = {'search': search, 'status': status}
      this.$store.dispatch('getSearchCharacters', payload);
      this.$store.commit('RESET_NAVIGATION_PAGE')
    },
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading
    },
    characters() {
      return this.$store.getters.characters;
    },
    navigation_page() {
      return this.$store.getters.navigation_page
    }
  },
}
</script>


<style scoped>
  #characters-container {
    display: flex;
    margin: 0px 200px 0px 200px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .arrow-right {
    -webkit-transform:rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  input {
    background-color: white;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 15px 0 30px;
    border: 1px solid #e3e3e3;
    color: #273849;
    outline: none;
    border-radius: 15px;
    margin-right: 10px;
    transition: border-color 0.2s ease;
  }
  select {
    background-color: white;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    border: 1px solid #e3e3e3;
    padding: 0px 0px 0px 10px;
    color: #273849;
    outline: none;
    border-radius: 15px;
    margin-right: 10px;
    transition: border-color 0.2s ease;
  }
  button {
    height: 30px;
    padding: 5px 20px 5px 20px;
    background-color:	white;
    border: 1px solid black;
    color: black;
    font-weight: 600;
    transition: 0.3s;
    border-radius: 4px;
    text-decoration: inherit;
  }
  button:hover {
    border: 1px solid transparent;
    background-color: #97ce4c;
    color: white;
  }
</style>

