<script>
import { store } from '../store';

export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>
<template>
    <div class="card h-100">
        <div class="card-body">
            <h5>{{ project.title }}</h5>
            <p>{{ project.post }}</p>
            <p>{{ project.author }}</p>
            <h5>Tecnologie</h5>
            <ul v-for="tech in project.technologies" :key="project.technologies.id">
                <li>{{ tech.name }}</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>