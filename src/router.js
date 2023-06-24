import { createRouter, createWebHashHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppDedication from './pages/AppDedication.vue';
import SingleProject from './pages/SingleProject.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/dedication',
            name: 'dedication',
            component: AppDedication
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/projects/:id',
            name: 'single-project',
            component: SingleProject
        }
    ]
});
export { router };