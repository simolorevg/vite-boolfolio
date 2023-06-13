<script>
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
        </div>
    </div>
</template>
<style lang="scss" scoped></style>