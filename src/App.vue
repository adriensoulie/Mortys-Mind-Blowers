<template>
  <div id="app">
    <Header/>
    <section>
      <div id="characters-container">
        <div v-for="character in characters.results" v-bind:key="character.id">
          <CharacterCard v-bind:character="character" 
            v-bind:character-name="character.name"
            v-bind:character-image="character.image"
            v-bind:character-status="character.status"
            v-bind:character-gender="character.gender"
        
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import CharacterCard from './components/CharacterCard.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    characters: [],
  },
  getters: {
    characters: state => {
      return state.characters;
    }
  },
  mutations: {
    SET_CHARACTERS (state, characters) {
      state.characters = characters
    }
  },
  actions: {
    loadCharacters ({ commit }) {
      fetch("https://rickandmortyapi.com/api/character/?page=1")
        .then(res => res.json())
        .then((result) => {
          commit('SET_CHARACTERS', result)
        },
        (error) => {
          console.log(error)
        })
      }
    }
})

export default {
  name: 'App',
  store: store,
  components: {
    Header,
    CharacterCard
  },
  computed: {
    characters() {
      return this.$store.getters.characters;
    },
  },
  created() {
    this.$store.dispatch('loadCharacters');
  },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#characters-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
