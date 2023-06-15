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
        console.log('id numero ', idParam);
        axios.get(`${this.store.localUrl}/${idParam}`).then((resp) => {
            this.project = resp.data.results;
            console.log('Project ', this.project);
            console.log('result ', resp.data.results);
        });
    }
}
</script>
<template>
    <h2 class="text-center">{{ project.id }}</h2>
</template>
<style lang="scss"></style>