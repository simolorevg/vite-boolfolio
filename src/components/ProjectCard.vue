<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>
<template>
    <div class="my-card">
        <div class="my-card-img">
            lorem img
        </div>
        <div class="my-card-text">
            {{ project.title }}
            <router-link :to="{ name: 'single-project', params: { id: project.id } }">
                <button class="btn my-btn">Dettagli</button>
            </router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../style/general.scss' as *;

/*LAYOUT*/
.my-card {
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .my-card-img {
        width: 100%;
        height: 50%;
        border-radius: 5px 5px 0 0;
        background-color: orange;
    }

    .my-card-text {
        height: 50%;
        width: 100%;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .my-btn {
        background-color: #050401;
        margin-top: 5px;
        color: white;
    }

    .my-btn:hover {
        color: gold;
    }
}
</style>