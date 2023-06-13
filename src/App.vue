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

<template></template>

<style lang="scss" scoped>
@use "./style/general.scss" as *;
</style>
