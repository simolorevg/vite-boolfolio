<script>
import { store } from './store';
import axios from 'axios';
export default {
  data() {
    return {
      store
    }
  },
  mounthed() {
    this.callProjects();
  },
  methods: {
    callProjects() {
      axios.get(this.store.localUrl).then((resp) => {
        this.store.projects = resp.data.results;
      })
    }
  }
}
</script>

<template>
  <div class="container">
    <h2 class="text-center">Vite Boolfolio</h2>
  </div>
</template>

<style lang="scss" scoped>
@use "./style/general.scss" as *;
</style>
