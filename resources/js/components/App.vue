<template>
    <div>
        <div class="center">
            <h1>Laravel 8 & Vue 3</h1>
        </div>

        <ul>
            <li><router-link to="/">Go to Home</router-link></li>
            <li><router-link to="/about">Go to About</router-link></li>
        </ul>

        <div class="center">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "App.vue"
}
</script>

<style scoped>
.center {
    text-align: center;
}
</style>
