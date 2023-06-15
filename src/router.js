import { createRouter, createWebHashHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
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
        }
    ]
});
export { router };