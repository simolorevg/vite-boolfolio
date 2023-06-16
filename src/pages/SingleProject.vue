<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SinglePost',
    data() {
        return {
            store,
            project: {},
            errorMsg: ""
        }
    },
    mounted() {
        const idParam = this.$route.params.id;
        axios.get(`${this.store.localUrl}/${idParam}`).then((resp) => {
            this.project = resp.data.results;
        });
    }
}
</script>
<template>
    <h2 class="text-center">{{ project.title }}</h2>
    <h3>di {{ project.author }}</h3>
    <p>{{ project.post }}</p>
</template>
<style lang="scss"></style>