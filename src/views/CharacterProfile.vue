<template>
    <div>
        <div>
            <router-link to="/characters">
                <img id="arrow-nav" src="../assets/arrow-back.png" width="30px"/>
            </router-link> 
            <section>
                <div class="container">
                    <div class="card">
                        <img class="card-image" :src=character.image />
                        <div class="card-infos">
                            <h2 class="card-name"> {{ character.name }}</h2>
                            <div class="card-status">
                                <div v-if="character.status === 'Alive'" class="status-icon-alive"></div>
                                <div v-if="character.status === 'Dead'" class="status-icon-dead"></div>
                                <div v-if="character.status === 'Unknown'" class="status-icon-unknown"></div>
                                <p> {{ character.status }} - {{ character.species }} </p>
                            </div>
                            <div>
                                <p>Last Seen Location:</p> 
                                <p>{{character.location.name}}</p>
                            </div>
                            <div>
                                <p>Gender:</p>
                                <p>{{ character.gender }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>


<script>
export default ({
computed: {
    character() {
        return this.$store.getters.character;
    },
},
})
</script>

<style scoped>
    p {
        display: flex;
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
        background-color: lightgray;
        width: fit-content;
    }
    .card-infos {
        display: block;
        margin-right: 30px;
    }
    .card-image {
        margin: 0px 20px 0px 0px;
        border-radius: 15px;
    }
    .card-name {
        display: flex;
        font-size: 28px;
    }
    .card-status {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    #arrow-nav {
        position: absolute;
        top: 0;
        left: 0;
        margin: 20px;
    }
</style>
