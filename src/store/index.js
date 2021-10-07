import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
      console.log("payload", payload)
      fetch(`https://rickandmortyapi.com/api/character/?&page=${payload.page}&name=${payload.search}&status=${payload.status}`)
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