<template>
    <div>
        <Header/>
        <div>
            <router-link to="/characters">
                <img id="arrow-nav" src="../assets/arrow-back.png" width="30px"/>
            </router-link> 
            <section>
                <div class="container">
                    <div
                        id="characters-container"
                        v-if="isLoading"
                        style="margin-top: 120px"
                    > 
                        Loading Characters...
                    </div>
                    <div v-else class="card">
                        <img class="card-image" :src=character.image />
                        <div class="card-infos">
                            <h2 v-if="character && character.name" class="card-name"> {{ character.name }}</h2>
                            <div class="card-status">
                                <div v-if="character && character.status === 'Alive'" class="status-icon-alive"></div>
                                <div v-if="character && character.status === 'Dead'" class="status-icon-dead"></div>
                                <div v-if="character && character.status === 'unknown'" class="status-icon-unknown"></div>
                                <p v-if="character && character.status && character.species">
                                    {{ character.status }} - {{ character.species }} 
                                </p>
                            </div>
                            <div class="section-infos">
                                <p>Last Seen Location:</p> 
                                <p v-if="character && character.location && character.location.name" class="font-weight">
                                    {{character.location.name}}
                                </p>
                            </div>
                            <div class="section-infos">
                                <p>Gender:</p>
                                <p v-if="character && character.gender" class="font-weight">{{ character.gender }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>


<script>
import Header from '../components/Header.vue'
export default ({
    components: {
        Header
    },
    computed: {
        isLoading() {
            return this.$store.getters.isLoading;
        },
        character() {
            return this.$store.getters.character;
        },
        currentRouteName() {
            return this.$route.path;
        },
    },
    beforeCreate() {
        this.$store.dispatch('getCharacterById', this.$route.path.replace("/characters/", ""))
    },
})
</script>

<style scoped>
    p {
        display: flex;
        margin: 0;
    }
    .status-icon-alive {
        height: 0.5rem;
        width: 0.5rem;
        margin-right: 0.375rem;
        background: greenyellow;
        border-radius: 50%;
    }
    .status-icon-dead {
        height: 0.5rem;
        width: 0.5rem;
        margin-right: 0.375rem;
        background: red;
        border-radius: 50%;
    }
    .status-icon-unknown {
        height: 0.5rem;
        width: 0.5rem;
        margin-right: 0.375rem;
        background: gray;
        border-radius: 50%;
    }
    .container {
        display: flex;
        justify-content: center;
    }
    .card {
        display: flex;
        margin-top: 90px ;
        border-radius: 15px;
        will-change: transform;
        transition: transform 350ms;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        background-color: lemonchiffon;
        width: fit-content;
    }
    .card-infos {
        display: block;
        width: 300px;
        margin-right: 30px;
    }
    .card-image {
        margin: 0px 20px 0px 0px;
        border-radius: 15px;
    }
    .card-name {
        display: flex;
        font-size: 28px;
        font-weight: 900;
        color: black;
    }
    .card-status {
        display: flex;
        font-size: 18px;
        font-weight: 700;
        flex-direction: row;
        align-items: center;
    }
    .font-weight {
        font-weight: 600;
    }
    .section-infos {
        margin: 20px 0px 20px 0;
        font-size: 16px;
    }
    #arrow-nav {
        position: absolute;
        top: 0;
        left: 0;
        margin: 120px 20px 20px 20px;
    }
</style>
