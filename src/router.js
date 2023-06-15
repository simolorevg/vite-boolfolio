import { createRouter, createWebHashHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import SingleProject from './pages/SingleProject.vue';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/projects/:id',
            name: 'single-project',
            component: SingleProject
        }
    ]
});
export { router };