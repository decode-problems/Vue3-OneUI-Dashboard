<template>
    <Main>
        <router-view></router-view>
    </Main>
</template>

<script>
import Main from "./layouts/Main";

export default {
    name: "App.vue",
    components: {Main}
}
</script>
