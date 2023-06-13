import { reactive } from "vue";
export const store = reactive({
    localUrl: 'http://127.0.0.1:8000/api/projects',
    projectsStore: []
});