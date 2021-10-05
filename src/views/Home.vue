<template>
  <div class="home">
    <Header/>
    <section>
      <h1>Welcome to SchwiftyApp</h1>
      <p>powered by</p>
      <code>https://rickandmortyapi.com/ </code>
    </section>
  </div>
</template>

<script>

import Header from '../components/Header.vue'


export default {
  name: 'Home',
  components: {
    Header,
  },

}
</script>
