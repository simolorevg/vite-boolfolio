<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SinglePost',
    data() {
        return {
            store,
            project: null,
            errorMsg: ""
        }
    },
    mounted() {
        const idParam = this.$route.params.id;
        console.log('id numero ', idParam);
        axios.get(`http://127.0.0.1:8000/api/projects/${idParam}`).then((resp) => {
            if (resp.data.success) {
                this.project = resp.data.results;
                console.log(this.project);
            }
        });
    }
}
</script>
<template></template>
<style lang="scss"></style>