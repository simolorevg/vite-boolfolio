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
    <div class="my-card d-flex flex-column">
        <div class="my-card-image">
            <div class="img-unavaiable">
                SORRY THE IMG IS NOT AVAIABLE :-(
            </div>
        </div>
        <div class="my-card-body">
            <h5>{{ project.title }} <span>
                    <p> di {{ project.author }}</p>
                </span></h5>
            <p>{{ project.post }}</p>
            <div v-if="project.technologies !== undefined">
                <h5>Tecnologie</h5>
                <p>
                    <span v-for="tech in project.technologies" :key="project.technologies.id">{{ tech.name }}, </span>
                </p>
            </div>
            <div v-else>
                <h6>Nessuna tecnologia</h6>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../style/general.scss' as *;
</style>