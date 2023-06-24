<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SinglePost',
    data() {
        return {
            store,
            project: {},
            errorMsg: "",
            loader: true
        }
    },
    mounted() {
        setTimeout(this.showData, 3000);
    },
    methods: {
        showData() {
            this.loader = false;
            const idParam = this.$route.params.id;
            axios.get(`${this.store.localUrl}/${idParam}`).then((resp) => {
                this.project = resp.data.results;
            });
        }
    }
}
</script>
<template>
    <div class="my-show-container">
        <div v-if="(this.loader)" class="d-flex justify-content-center align-items-center">
            <img src="src\imgs\dark-loader.gif" alt="LOADING">
        </div>
        <div v-else>
            <h2 class="text-center">{{ project.title }}</h2>
            <h3>{{ project.author }}</h3>
            <p>{{ project.post }}</p>
        </div>
    </div>
</template>
<style lang="scss">
.my-show-container {
    width: 80%;
    margin: 10px auto;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
}
</style>