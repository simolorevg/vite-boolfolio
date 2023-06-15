<script>
export default {
    name: 'AppNavbar',
    data() {
        return {
            menuNav: [
                {
                    title: 'Home',
                    route: 'home'
                },
                {
                    title: 'About',
                    route: 'about'
                },
                {
                    title: 'Progetti',
                    route: 'projects'
                }
            ]
        }
    }
}
</script>
<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="navbar-brand">
                    Vite Boolfolio
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" v-for="item in menuNav">
                        <router-link :to="{ name: item.route }" class="nav-link">
                            {{ item.title }}
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<style lang="scss"></style>