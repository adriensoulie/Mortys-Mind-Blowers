<template>
    <div>
        <div class="container" style="display: flex, align-items:center">
            <Header/>
            <h1 style="margin-top: 60px">
                Sorry, this page doesn't exist or has been moved to another location
            </h1>
            <div class="container-portal">
                <router-link to="/characters" style="text-decoration: none; color: inherit;">
                    <img class="rotate" alt='Rick and Morty Portal' src='../assets/portal.png' style='width: 200px'>
                </router-link>
            </div>
            <router-link to="/characters" style="text-decoration: none; color: inherit;">
                <a id="redirect" href=''>
                    Take me back !
                </a>
            </router-link>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default ({
    components: {
        Header,
    }
})
</script>


<style scoped>
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.rotate {
  animation: rotation 20s infinite linear;
}
.container-portal {
    margin: 40px;
}
#redirect {
    padding: 5px 20px 5px 20px;
    background-color:	white;
    border: 1px solid black;
    color: black;
    font-weight: 800;
    transition: 0.3s;
    border-radius: 4px;
    text-decoration: inherit;
}
#redirect:hover {
    border: 1px solid transparent;
    background-color: #97ce4c;
    color: white;
}
</style>
