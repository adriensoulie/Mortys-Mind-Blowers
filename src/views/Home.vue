<template>
  <div class="home">
    <Header/>
    <section>
      <h2>Welcome to SchwiftyApp</h2>
      <p>powered by</p>
      <code>https://rickandmortyapi.com/</code>
    </section>
    <router-link id="nav" to="/characters">
      Let's view characters !
    </router-link> 
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header,
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


<style scoped>

  .characters {
    font-size: 36px;
    font-weight: bold;
    color: #97ce4c;
  }

  #nav {
    display: inline-block;
    margin-top: 60px;
    padding: 5px 20px 5px 20px;
    background-color:	white;
    border: 1px solid black;
    color: black;
    font-weight: 800;
    transition: 0.3s;
    border-radius: 4px;
    text-decoration: inherit;
}

#nav:hover {
    border: 1px solid transparent;
    background-color: #97ce4c;
    color: white;
}
</style>
