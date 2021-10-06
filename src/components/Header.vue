<template>
    <div class="header">
            <router-link to="/" style="text-decoration: none; color: inherit;">
                <div class="header-app">
                        <h1>SchwiftyApp</h1>
                        <img alt="Rick and Morty Portal" src="../assets/Rick-And-Morty.png" style='width: 120px'>
                </div>
            </router-link> 
            <a id="login" href=''>
                Login
            </a>
    </div>
</template>


<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 'full';
    padding: 10px;
    margin: 0;
}

.header-app {
    display: flex;
    align-items: center;
}

h1 {
    color: black;
}

li a {
    text-decoration: none;
}

#login {
    padding: 5px 20px 5px 20px;
    background-color:	white;
    border: 1px solid black;
    color: black;
    font-weight: 800;
    transition: 0.3s;
    border-radius: 4px;
    text-decoration: inherit;
}

#login:hover {
    border: 1px solid transparent;
    background-color: #97ce4c;
    color: white;
}

.logo {
    align-items: center;
}

</style>