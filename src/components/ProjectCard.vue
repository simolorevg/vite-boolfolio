<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>
<template>
    <article class="article-wrapper">
        <div class="rounded-lg container-project">
        </div>
        <div class="project-info">
            <div class="flex-pr">
                <div class="project-title text-nowrap">{{ project.title }}</div>
                <div class="project-hover">
                    <router-link :to="{ name: 'single-project', params: { id: project.id } }">
                        <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black"
                            stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none"
                            stroke="currentColor">
                            <line y2="12" x2="19" y1="12" x1="5"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="types">
                <span style="background-color: rgba(165, 96, 247, 0.43); color: rgb(85, 27, 177);" class="project-type"
                    v-for="tech in project.technologies" :key="project.technologies.id">• {{ tech.name }}</span>
            </div>
        </div>
    </article>
</template>
<style lang="scss" scoped>
@use '../style/general.scss' as *;
</style>