import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    character: [],
    characters_status: null,
    navigation_page: 1,
    isLoading: false,
  },
  getters: {
    characters: state => {
      return state.characters;
    },
    character: state => {
      return state.character;
    },
    navigation_page: state => {
        return state.navigation_page
    }
  },
  mutations: {
    SET_CHARACTERS (state, characters) {
        state.characters = characters
    },
    SET_CHARACTER (state, character) {
        state.character = character
    },
    SET_LOADING (state, loading) {
        state.isLoading = loading
    },
    INCREMENT_NAVIGATION_PAGE (state) {
        state.navigation_page += 1
    },
    DECREMENT_NAVIGATION_PAGE (state) {
        state.navigation_page -= 1
    },
    RESET_NAVIGATION_PAGE (state) {
        state.navigation_page = 1
    },
  },
  actions: {
    loadCharacters ({ commit }) {
        commit('SET_LOADING', true)
        fetch("https://rickandmortyapi.com/api/character/?page=1")
            .then(res => res.json())
            .then((result) => {
                commit('SET_CHARACTERS', result)
            },
            (error) => {
                console.log(error)
            })
            .then(
              commit('SET_LOADING', false)
            )
        },
    getSearchCharacters ({ commit }, payload) {
    commit('SET_LOADING', true)
      fetch(`https://rickandmortyapi.com/api/character/?&page=${payload.page}&name=${payload.search}&status=${payload.status}`)
        .then(res => res.json())
        .then((result) => {
          commit('SET_CHARACTERS', result)
        },
        (error) => {
          console.log(error)
        })
        .then(
          commit('SET_LOADING', false)
        )
      },
    getCharacterById ({ commit }, id) {
    commit('SET_LOADING', true)
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then((result) => {
          commit('SET_CHARACTER', result)
        },
        (error) => {
          console.log(error)
        })
        .then(
          commit('SET_LOADING', false)
        )
      },
  }
})