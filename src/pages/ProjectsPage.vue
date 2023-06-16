<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';
import SingleProject from './SingleProject.vue';
export default {
    name: 'AppHome',
    components: {
        ProjectCard,
        SingleProject
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(this.store.localUrl).then(resp => {
                this.store.projectStore = resp.data.results;
            })
        }
    }
}
</script>
<template>
    <h2 class="text-center">Vite Boolfolio</h2>
    <div class="container d-flex flex-column justify-content-center align-items-center">
        <div class="row row-cols-3 g-2 my-2">
            <div class="col" v-for="project in store.projectStore" :key="project.id">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>