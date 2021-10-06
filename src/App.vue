<template>
  <div id="app">
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
    character: [],
  },
  getters: {
    characters: state => {
      return state.characters;
    },
    character: state => {
      return state.character;
    },
  },
  mutations: {
    SET_CHARACTERS (state, characters) {
      state.characters = characters
    },
    SET_CHARACTER (state, character) {
      state.character = character
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
      getSearchCharacters ({ commit }, payload) {
      fetch(`https://rickandmortyapi.com/api/character/?name=${payload.search}&status=${payload.status}`)
        .then(res => res.json())
        .then((result) => {
          commit('SET_CHARACTERS', result)
        },
        (error) => {
          console.log(error)
        })
      },
      getCharacterById ({ commit }, id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then((result) => {
          commit('SET_CHARACTER', result)
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