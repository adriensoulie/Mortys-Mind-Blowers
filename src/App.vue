<template>
  <div id="app">
    <Header/>
    <div>
      <div v-for="character in characters.results" v-bind:key="character.id">
        <h2>{{ character.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    characters: [],
  },
  getters: {
    characters: state => {
      return state.characters;
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
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

store.dispatch('loadCharacters')
console.log(store.state.characters)


export default {
  name: 'App',
  store: store,
  components: {
    Header
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
</style>
