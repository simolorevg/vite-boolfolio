import { createRouter, createWebHashHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        }
    ]
});
export { router };