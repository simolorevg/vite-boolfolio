<script>
import AppNavbar from './components/AppNavbar.vue';
export default {
  components: {
    AppNavbar
  }
}
</script>

<template>
  <AppNavbar />
  <router-view></router-view>
</template>

<style lang="scss" scoped>
@use "./style/general.scss" as *;
</style>
