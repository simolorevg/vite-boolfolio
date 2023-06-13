<script>
import axios from 'axios';
import { store } from './store';
export default {
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
        this.store.projectsStore = resp.data.results;
      })
    }
  }
}
</script>

<template>
  <div class="container">
    <h2 class="text-center">Vite Boolfolio</h2>
    <ul v-for="project in store.projectsStore" :key="project.id">
      <li>{{ project.title }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "./style/general.scss" as *;
</style>
