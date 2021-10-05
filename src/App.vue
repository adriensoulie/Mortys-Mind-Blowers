<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/characters">Characters</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

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
      },
      getSearchCharacters ({ commit }, search) {
      fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
        .then(res => res.json())
        .then((result) => {
          commit('SET_CHARACTERS', result)
        },
        (error) => {
          console.log(error)
        })
      },
    }
})

export default {
  name: 'App',
  store,
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