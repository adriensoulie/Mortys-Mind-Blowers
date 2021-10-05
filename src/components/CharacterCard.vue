<template>
    <div id="card">
        <img :src=characterImage />
        <h2>{{ characterName }}</h2>
        <p>{{ characterGender }}</p>
        <p>{{ characterStatus }}</p>
    </div>
</template>

<script>
export default {
    props: {
        characterName: String,
        characterImage: String,
        characterStatus: String,
        characterGender: String,
    },
}
</script>

<style scoped>
    #card {
        margin: 10px;
        padding: 10px;
    }
</style>

