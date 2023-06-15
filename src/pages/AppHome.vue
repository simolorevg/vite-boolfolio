<script>
export default {
    name: 'AppHome',
}
</script>
<template>
    <div class="container text-center">
        <h2>Vite Boolfolio</h2>
        <router-link :to="{ name: 'projects' }" class="btn btn-primary">
            Ai progetti
        </router-link>
    </div>
</template>
<style lang="scss"></style>