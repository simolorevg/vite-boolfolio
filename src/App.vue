<script>
import axios from 'axios';
import { store } from './store';
import ProjectCard from './components/ProjectCard.vue';
export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.getProjects();
    console.log(this.store.projectStore);
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
  <router-view></router-view>
  <div class="container">
    <h2 class="text-center">Vite Boolfolio</h2>
    <div class="row row-cols-3 g-2">
      <div class="col" v-for="project in store.projectStore" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./style/general.scss" as *;
</style>
